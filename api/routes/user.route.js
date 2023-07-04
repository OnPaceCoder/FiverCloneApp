import express from "express";
import { verifyToken } from "../middleware/jwt";


const router = express.Router();
router.delete("/:id", verifyToken, deleteUser);

router.get("/:id", getUser)