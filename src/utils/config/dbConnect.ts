import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
  } catch (err: unknown) {
    err instanceof Error && err.message;
  }
};

export { connectDB };
