import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  user_name: {
    type: String,
  },
  dob: {
    type: String,
  },
  setting: {
    type: Objects,
  },
  phone_no: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
