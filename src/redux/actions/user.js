import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      "http://127.0.0.1:3000/netflixBckEnd/v1/login",
      { email, password },{withCredentials:true}
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "logOutRequest" });
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.get(
      "http://127.0.0.1:3000/netflixBckEnd/v1/logout",{withCredentials:true}
    );
    dispatch({ type: "logOutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logOutFail", payload: error.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `http://127.0.0.1:3000/netflixBckEnd/v1/me`,{ withCredentials: true }
    );
    console.log("data in load user function", data);
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error });
  }
};
