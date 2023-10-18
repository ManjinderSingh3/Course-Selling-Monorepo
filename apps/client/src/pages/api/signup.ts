import type { NextApiRequest, NextApiResponse } from "next";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
const CLIENT_JWT_SECRET = "SECRET";

type Data = {
  token?: string;
  message?: string;
};

export default async function signUpHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Signup route got hit");
  await isDbConnected();
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (admin) {
    return res.status(403).json({ message: "Admin already exist" });
  } else {
    const obj = { username: username, password: password };
    const newAdmin = new Admin(obj);
    newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, CLIENT_JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ message: "Admin created successfully", token });
  }
}
