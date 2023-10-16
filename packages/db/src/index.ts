import mongoose from "mongoose";

// Step -1 ( Create Schema's)
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

// Step -2 (Create Model/collections)
export const User = mongoose.model("Users", userSchema);
export const Admin = mongoose.model("Admins", adminSchema);
export const Course = mongoose.model("Courses", courseSchema);
export * from './isDbConnected'
