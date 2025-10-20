import { useState } from "react";
import { format } from "date-fns";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    const createdAt = new Date();
    const formattedCreatedAt = format(createdAt, "yyyy-MM-dd HH:mm");
    const formattedDueDate = format(new Date(dueDate), "yyyy-MM-dd HH:mm");

    const newTask = {
      title,
      createdAt: formattedCreatedAt,
      dueDate: formattedDueDate,
    };

    console.log("New Task:", newTask);

    // reset fields
    setTitle("");
    setDueDate("");
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Add Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="border p-2 rounded w-full mb-3"
      />

      <label className="block mb-1 font-medium">Due Date</label>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />

      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded w-full"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
