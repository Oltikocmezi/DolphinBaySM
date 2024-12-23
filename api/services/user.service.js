import bcrypt from "bcrypt";
import {
  findAllUsers,
  findUserById,
  updateUserById,
} from "../models/user.model.js";

// Get all users
export const getUsersService = async () => {
  return await findAllUsers();
};