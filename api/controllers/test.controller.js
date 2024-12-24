import {
  verifyUserService,
  verifyAdminService,
} from "../services/test.service.js";

export const shouldBeLoggedIn = async (req, res) => {
  try {
    const userId = req.userId; // Already verified by `verifyToken` middleware
    res.status(200).json({ message: "You are Authenticated", userId });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  try {
    verifyAdminService(token);
    res.status(200).json({ message: "You are Authenticated as Admin" });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};
