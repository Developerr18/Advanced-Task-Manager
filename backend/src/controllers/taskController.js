import TaskModel from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, category, priority, dueDate, status } =
      req.body;
    const userId = req.user.userId;

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const task = await TaskModel.create({
      title,
      description: description || "No description",
      category: category || "other",
      priority: priority || "medium",
      status: status || "todo",
      dueDate: dueDate ? new Date(dueDate) : null,
      user: userId,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error occured during task creation",
      error: error.message,
    });
  }
};

export const getTasks = async (req, res) => {};

export const updateTask = async (req, res) => {};

export const deleteTask = async (req, res) => {};
