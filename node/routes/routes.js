import express from "express";
import { getAllUsers, getUser, updateUser, DeleteUser } from "../controllers/UserController.js";

const router = express.Router()


router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', DeleteUser)

export default router