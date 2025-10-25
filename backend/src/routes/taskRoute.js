import express from "express";
import auth from "../middleware/auth.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/get", auth, getTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
