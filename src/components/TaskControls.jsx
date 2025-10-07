const TaskControls = () => {
  const taskDescription = true;

  return (
    <div className="flex flex-col p-8">
      <div className="task-form flex justify-between">
        <div className="flex flex-col">
          <label htmlFor="task-title">Task Title</label>
          <input
            className="border-2 border-gray-300 p-2 rounded mt-1"
            type="text"
            id="task-title"
            placeholder="Enter Task Title..."
          />
        </div>
        <div className="flex flex-col">
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
        <div className="flex flex-col">
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
        <div className="flex flex-col">
          <label htmlFor="taskDueDate">Due Date</label>
          <input
            className="border-2 border-gray-300 p-2 rounded mt-1"
            type="datetime-local"
            id="taskDueDate"
          />
        </div>
      </div>

      <div className="mt-7 flex">
        <label htmlFor="taskDescription">Description :</label>
        <textarea
          id="taskDescription"
          cols={40}
          className="border-2 border-gray-300 p-2 rounded ml-2"
          placeholder="Task Description (optional)..."
        ></textarea>
      </div>
    </div>
  );
};

export default TaskControls;
