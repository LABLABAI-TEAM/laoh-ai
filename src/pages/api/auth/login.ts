import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "@/models/User";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
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
      const { password, email } = req.body;
      // check if user is authenticated
      const isAuthenticated = await UserModel.findOne({ email }); //as typeof UserModel;
      if (!isAuthenticated)
        return res.status(409).json({ message: `User with ${email} exist` });
      // check user password
      const checkPWD = await bcrypt.compare(
        password,
        isAuthenticated.password!
      );
      if (!checkPWD)
        return res.status(403).json({ message: "invalid Credentials" });

      // generate JWT token
      const token = jwt.sign(
        { userId: isAuthenticated._id },
        process.env.JWT_SECRET!,
        {
          expiresIn: "7d",
        }
      );
      res.status(200).json({ token });
      break;

    default:
      break;
  }
}
