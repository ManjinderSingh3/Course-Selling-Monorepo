import type { NextApiRequest, NextApiResponse } from "next";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
const CLIENT_JWT_SECRET = "SECRET";

type Data = {
  token?: string;
  message?: string;
};

export default async function signInHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("SignIn route got hit");
  //await isDbConnected();
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, CLIENT_JWT_SECRET, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({ message: "Logged in successfully !!", token });
  } else {
    return res.status(401).json({ message: "User Authentication failed" });
  }
}
