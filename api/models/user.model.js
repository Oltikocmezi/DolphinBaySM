import prisma from "../lib/prisma.js";

// Get all users
export const findAllUsers = async () => {
  return await prisma.user.findMany();
};