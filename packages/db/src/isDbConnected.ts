import mongoose from "mongoose";

let isDbConnectionDone = false;
export async function isDbConnected() {
  if (isDbConnectionDone) {
    return;
  }
  isDbConnectionDone = true;
  await mongoose.connect(
    "mongodb+srv://manjinder:Ms2021-2022@coursesellingapp.xy8jux9.mongodb.net/",
    { dbName: "CourseSelling" }
  );
}