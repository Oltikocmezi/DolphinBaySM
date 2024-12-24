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

// Get a single user
export const getUserService = async (id) => {
  return await findUserById(id);
};

// Update a user
export const updateUserService = async (id, tokenUserId, data) => {
  if (id !== tokenUserId) throw new Error("Not Authorized!");

  const { password, avatar, ...inputs } = data;

  let updatedPassword = null;
  if (password) {
    updatedPassword = await bcrypt.hash(password, 10);
  }

  return await updateUserById(id, {
    ...inputs,
    ...(updatedPassword && { password: updatedPassword }),
    ...(avatar && { avatar }),
  });
};
