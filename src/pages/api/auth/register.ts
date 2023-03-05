import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "@/models/User";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { UserModelType } from "@/types/types";
import { connectDB } from "@/utils/config/dbConnect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  const { method } = req;
  await connectDB();

  switch (method) {
    case "POST":
      const { usernames, email, password } = req.body;
      // check if user is authenticated
      const isAuthenticated = await UserModel.findOne({ email });
      if (isAuthenticated)
        return res.status(409).json({ message: `User with ${email} exist` });

      const hashedPWD = await bcrypt.hash(password, 10);
      // create new userssssssss
      const newUser = new UserModel({ email, password: hashedPWD });
      try {
        await newUser.save();
        // generate JWT token
        const token = jwt.sign(newUser._id, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });
      } catch (error: unknown) {
        error instanceof Error && error.message;
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
