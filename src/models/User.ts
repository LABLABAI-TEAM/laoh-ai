import { MongoKerberosError } from "mongodb";
import mongoose from "mongoose";
const { Schema, Model, SchemaType } = mongoose;
const UserSchema = new Schema({
  usernames: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  eamil: String,
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
