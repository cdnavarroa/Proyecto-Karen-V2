import express from "express";
import { getAllUsers, getUser, updateUser, DeleteUser, createUser } from "../controllers/UserController.js";

const router = express.Router()


router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', DeleteUser)

export default router