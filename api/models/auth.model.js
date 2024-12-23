import prisma from "../lib/prisma.js";

// Create a new user
export const createUser = async ({ username, email, password }) => {
  return await prisma.user.create({
    data: { username, email, password },
  });
};

// Find user by email
export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
