import { getUsersService, getUserService } from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ message: "Failed to get users!" });
  }
};

export const getUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await getUserService(id);
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user:", err.message);
    res.status(500).json({ message: "Failed to get user!" });
  }
};