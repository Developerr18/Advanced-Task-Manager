const TaskForm = () => {
  return (
    <div>
      <div className="flex gap-4 mb-5 flex-wrap">
        <div className="flex-1 min-w-48">
          <label className="block mb-1 font-semibold text-gray-700">
            Task Title*
          </label>
          <input
            type="text"
            placeholder="Enter task title..."
            className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-base transition-colors"
          />
        </div>
        <div className="flex-1 min-w-48">
          <label className="block mb-1 font-semibold text-gray-700">
            Category
          </label>
          <select className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-base transition-colors">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex-1 min-w-48">
          <label className="block mb-1 font-semibold text-gray-700">
            Priority
          </label>
          <select className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-base transition-colors">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex-1 min-w-48">
          <label className="block mb-1 font-semibold text-gray-700">
            Due Date
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-base transition-colors"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block mb-1 font-semibold text-gray-700">
          Description
        </label>
        <textarea
          placeholder="Task description (optional)..."
          className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-base resize-y min-h-20 transition-colors"
        />
      </div>

      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all mb-5">
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
