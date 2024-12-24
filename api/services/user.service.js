import bcrypt from "bcrypt";
import { findAllUsers } from "../models/user.model.js";

// Get all users
export const getUsersService = async () => {
  return await findAllUsers();
};
