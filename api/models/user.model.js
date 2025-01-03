import prisma from "../lib/prisma.js";

// Get all users
export const findAllUsers = async () => {
  return await prisma.user.findMany();
};

// Get a single user by ID
export const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

// Update a user
export const updateUserById = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};
