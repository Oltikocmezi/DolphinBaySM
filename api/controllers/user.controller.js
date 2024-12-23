import {
    getUsersService,
    getUserService,
    updateUserService,
  } from "../services/user.service.js";
  
  export const getUsers = async (req, res) => {
    try {
      const users = await getUsersService();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ message: "Failed to get users!" });
    }
  };