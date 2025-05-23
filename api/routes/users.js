// Roteador principal dos endpoints relacionados aos usuários.
// Cada rota chama um controller responsável pela lógica específica.

import express from "express";
import { 
  addUser, 
  deleteUser, 
  getUsers, 
  updateUser, 
  getUserById, 
  getUsersByName 
} from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUserById)
router.get("/search/:name", getUsersByName)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router