import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser } from "../models/auth.model.js";

// Register a new user
export const registerService = async (username, email, password) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user to the database
  return await createUser({ username, email, password: hashedPassword });
};

// Login user

// Logout user
