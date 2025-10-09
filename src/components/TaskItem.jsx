const TaskItem = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-l-4 border-yellow-500">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            Sample Task Title
          </h4>
          <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
            work
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm my-3 leading-relaxed">
        This is a sample task description explaining what needs to be done.
      </p>

      <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700">
            medium
          </span>
          <span className="text-xs text-gray-500">📅 12/31/2024</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button className="cursor-pointer px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Start
          </button>
          <button className="cursor-pointer px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
            Edit
          </button>
          <button className="cursor-pointer px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Delete
          </button>
          <button className="cursor-pointer px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
