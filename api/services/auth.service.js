import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/auth.model.js";

// Register a new user
export const registerService = async (username, email, password) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user to the database
  return await createUser({ username, email, password: hashedPassword });
};

// Login user
export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  // Generate a JWT token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return { user, token };
};

// Logout user
