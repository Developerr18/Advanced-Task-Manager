import TaskFilters from "./TaskFilters";

const TaskControls = () => {
  return (
    <div className="flex flex-col p-8 bg-gray-100">
      <div className="task-form flex justify-between gap-5 flex-wrap">
        <div className="flex flex-col flex-2">
          <label htmlFor="task-title">Task Title</label>
          <input
            className="border-2 border-gray-300 p-2 rounded mt-1"
            type="text"
            id="task-title"
            placeholder="Enter Task Title..."
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="taskCategory">Category</label>
          <select
            className="border-2 border-gray-300 p-2 rounded mt-1"
            id="taskCategory"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
            <option value="shopping">Shopping</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="taskPriority">Priority</label>
          <select
            className="border-2 border-gray-300 p-2 rounded mt-1"
            id="taskPriority"
          >
            <option value="low">Low</option>
            <option value="medium" selected>
              Medium
            </option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="taskDueDate">Due Date</label>
          <input
            className="border-2 border-gray-300 p-2 rounded mt-1"
            type="datetime-local"
            id="taskDueDate"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col">
        <label htmlFor="taskDescription">Description</label>
        <textarea
          id="taskDescription"
          cols={40}
          className="border-2 border-gray-300 p-2 rounded mt-1 w-full"
          placeholder="Task Description (optional)..."
        ></textarea>
      </div>

      <button className="bg-purple-500 hover:bg-purple-400 text-white rounded mt-5 w-full sm:max-w-40 p-2 cursor-pointer">
        Add Task
      </button>

      <TaskFilters />
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 cursor-pointer mt-5 sm:max-w-40">
        Clear Filters
      </button>
    </div>
  );
};

export default TaskControls;
