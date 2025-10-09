import EmptyTaskList from "./EmptyTasklist";
import TaskItem from "./TaskItem";

const TaskColumns = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* To Do Column */}
        <div className="bg-gray-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-gray-300">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>📋</span> To Do
              <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs">
                0
              </span>
            </h3>
          </div>

          <TaskItem />
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
          <EmptyTaskList />
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
          <EmptyTaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskColumns;
