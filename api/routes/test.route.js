import express from "express";
import {
  shouldBeLoggedIn,
  shouldBeAdmin,
} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// User must be logged in
router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

// User must be an admin
router.get("/should-be-admin", shouldBeAdmin);

export default router;
