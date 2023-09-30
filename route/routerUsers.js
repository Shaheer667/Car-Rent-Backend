import express from "express";
import { addUser, login } from "../controller/controllerUsers.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", addUser);

export default router;
