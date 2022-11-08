import mongoose, { mongo } from "mongoose";

const connectDB = function () {
  mongoose
    .connect("mongodb://127.0.0.1:27017/netflix")
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB
