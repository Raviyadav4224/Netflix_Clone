import { User } from "../models/user.js";
import ErrorResponse from "../utils/errorResponse.js";
export const getAllUserDetails = async (req, res) => {
  const user = await User.find();
  const count = await User.count();
  res.status(201).json({
    success: true,
    count,
    user,
  });
};
export const getCurrentUserDetails = async (req, res) => {
  res.status(201).json({
    success: true,
    user:req.user,
  });
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("Please enter all fields", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    if (password !== user.password) {
      return next(new Error("Invalid Credentials"));
    }
    sendToken(201, user, res);
  } catch (error) {
    next(new ErrorResponse("Login Failed", 400));
  }
};
export const logout = async (req, res, next) => {
  const { token } = req.cookies;
  if (token === undefined) {
    return next(new ErrorResponse("Please Login first", 400));
  }
  res
    .cookie("token", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .status(201)
    .json({
      success: true,
      message: "Logout successfully",
    });
};
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorResponse("User already exists", 409));
    }
    user = await User.create({
      username,
      email,
      password,
    });
    sendToken(201, user, res);
  } catch (error) {
    next(new ErrorResponse("Registration Failed", 400));
  }
};
export const updateUserDetails = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findByIdAndUpdate(
      req.user.id,
      { username, email, password },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    user = await user.save();
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (statusCode, user, res) => {
  const token = user.getSignedToken();
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 10 * 60 * 1000),
      secure: true,
      sameSite: "none"
    })
    .json({
      success: true,
      token,
    });
};
