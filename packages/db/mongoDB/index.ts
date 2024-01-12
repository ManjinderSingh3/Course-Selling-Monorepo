import mongoose from "mongoose";

// Step -1 ( Create Schema's)
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
});

const adminSchema = new mongoose.Schema({
  email: String,
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
export const User =
  mongoose.models.Users || mongoose.model("Users", userSchema);
export const Admin =
  mongoose.models.Admins || mongoose.model("Admins", adminSchema);
export const Course =
  mongoose.models.Courses || mongoose.model("Courses", courseSchema);
export * from "./isDbConnected";
