const EditModel = () => {
  return (
    <div className="hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl max-w-lg w-11/12 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Edit Task</h2>
          <span className="text-4xl cursor-pointer text-gray-400 hover:text-gray-700 transition">
            &times;
          </span>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Title*
          </label>
          <input
            type="text"
            className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Description
          </label>
          <textarea className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-y min-h-20 transition-colors" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Category
          </label>
          <select className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Priority
          </label>
          <select className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Due Date
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Status
          </label>
          <select className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors">
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex gap-3 justify-end mt-5">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModel;
