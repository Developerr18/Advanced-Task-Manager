import express from "express";
import auth from "../middleware/auth.js";
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    getDueSoonTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/get", auth, getTasks);
router.put("/update/:id", auth, updateTask);
router.delete("/delete/:id", auth, deleteTask);
router.get("/due-soon", auth, getDueSoonTasks);

export default router;
