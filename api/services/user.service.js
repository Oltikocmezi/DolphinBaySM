import bcrypt from "bcrypt";
import { findAllUsers, findUserById } from "../models/user.model.js";

// Get all users
export const getUsersService = async () => {
  return await findAllUsers();
};

// Get a single user
export const getUserService = async (id) => {
  return await findUserById(id);
};