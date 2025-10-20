import useTaskStore from "../store/taskStore";
import { toast } from "react-toastify";
import { format } from "date-fns";

const TaskItem = ({ task }) => {
  const {
    handleDeleteTask,
    handleStartTask,
    handleCompleteTask,
    openEditModal,
  } = useTaskStore();

  const formattedDueDate = task.dueDate && format(task.dueDate, "dd-MM-yyyy");

  return (
    <div className="bg-white hover:-translate-y-1 mb-4 rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-l-4 border-yellow-500">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            {task.title}
          </h4>
          <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
            {task.category}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm my-3 leading-relaxed">
        {task.description}
      </p>

      <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700">
            {task.priority}
          </span>
          <span className="text-xs text-gray-500">📅 {formattedDueDate}</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          {task.status === "todo" && (
            <button
              onClick={() => handleStartTask(task.id)}
              className="cursor-pointer px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Start
            </button>
          )}

          <button
            onClick={() => openEditModal(task)}
            className="cursor-pointer px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
          >
            Edit
          </button>

          <button
            onClick={() => {
              handleDeleteTask(task.id);
              toast.success("Task Deleted Successfully");
            }}
            className="cursor-pointer px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>

          {task.status !== "completed" && (
            <button
              onClick={() => {
                handleCompleteTask(task.id);
                toast.success("Task Completed Successfully");
              }}
              className="cursor-pointer px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
