import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "@/models/User";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const {} = req;
}
