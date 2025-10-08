const TaskColumns = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* To Do Column */}
        <div className="bg-gray-50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-gray-300">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>📋</span> To Do
              <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs">
                0
              </span>
            </h3>
          </div>

          {/* Sample Task Item */}
          <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 border-yellow-500">
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
              This is a sample task description explaining what needs to be
              done.
            </p>

            <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700">
                  medium
                </span>
                <span className="text-xs text-gray-500">📅 12/31/2024</span>
              </div>

              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Start
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                  Edit
                </button>
                <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
                <button className="px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  Complete
                </button>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="text-center text-gray-500 italic py-10 hidden">
            No tasks here
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-gray-50 rounded-xl p-5 min-h-96">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-gray-300">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>🔄</span> In Progress
              <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs">
                0
              </span>
            </h3>
          </div>

          {/* Empty State */}
          <div className="text-center text-gray-500 italic py-10">
            No tasks here
          </div>
        </div>

        {/* Completed Column */}
        <div className="bg-gray-50 rounded-xl p-5 min-h-96">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-gray-300">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>✅</span> Completed
              <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs">
                0
              </span>
            </h3>
          </div>

          {/* Empty State */}
          <div className="text-center text-gray-500 italic py-10">
            No tasks here
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskColumns;
