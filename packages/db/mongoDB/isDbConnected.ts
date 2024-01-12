import mongoose from "mongoose";
import "dotenv/config";

let isDbConnectionDone = false;
export async function isDbConnected() {
  console.log("---->",process.env.MONGODB_URL);
  if (isDbConnectionDone) {
    return;
  }
  isDbConnectionDone = true;
  await mongoose.connect(process.env.MONGODB_URL as string, {
    dbName: "CourseSelling",
  });
}
