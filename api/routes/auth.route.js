import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

export default router;