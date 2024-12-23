import jwt from "jsonwebtoken";
import { registerService, loginService } from "../services/auth.service.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await registerService(username, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err.message);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginService(email, password);
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(401).json({ message: "Login failed: " + err.message });
  }
};

export const logout = (req, res) => {
  //db operations
  console.log("logout controller");
};

// async function testConnection() {
//   try {
//     await prisma.$connect();
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   } finally {
//     await prisma.$disconnect();
//     console.log("Disconnected from the database");
//   }
// }

// testConnection();
