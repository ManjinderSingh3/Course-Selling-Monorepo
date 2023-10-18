import type { NextApiRequest, NextApiResponse } from "next";
import { Admin, isDbConnected } from "db";
import jwt from "jsonwebtoken";
const CLIENT_JWT_SECRET = "SECRET";

type Data = {
  username?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await isDbConnected();
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, CLIENT_JWT_SECRET, (err, decryptedValue) => {
      if (err) {
        return res.status(403);
      } else {
        // CASE-1 : When Token is undefined
        if (!decryptedValue) {
          return res.status(403);
        }
        // CASE-2 : When token/payload is of type String
        if (typeof decryptedValue === "string") {
          return res.status(403);
        }
        req.headers["userId"] = decryptedValue.id;
      }
    });
    const userId = req.headers["userId"];
    console.log(userId);
    const admin = await Admin.findOne({ _id: userId });
    if (!admin) {
      return res.status(403).json({ message: "Admin does not exist" });
    }
    res.json({
      username: admin.username,
    });
  }
}
