import express from "express";
import { verifyToken } from "../middleware/jwt";
import { deleteUser, getUser } from "../controllers/user.controller";


const router = express.Router();
router.delete("/:id", verifyToken, deleteUser);

router.get("/:id", getUser)