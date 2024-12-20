import prisma from "../lib/prisma.js";

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

export const register = (req, res) => {
  //db operations
  console.log("register controller");
};

export const login = (req, res) => {
  //db operations
  console.log("login controller");
};

export const logout = (req, res) => {
  //db operations
  console.log("logout controller");
};
