import EditModel from "./components/EditModel";
import Header from "./components/Header";
import TaskColumns from "./components/TaskColumns";
import TaskFilters from "./components/TaskFilters";
import TaskForm from "./components/TaskForm";
import useTaskStore from "./store/taskStore";

export default function TaskManager() {
  const { isEditModalOpen } = useTaskStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 p-5">
      <div
        className={`${
          isEditModalOpen ? "blur-sm" : ""
        } max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden`}
      >
        <Header />
        <div className="p-8 border-b border-gray-200">
          <TaskForm />
          <TaskFilters />
        </div>
        <TaskColumns />
      </div>
      <EditModel />

      {/* Notification */}
      <div className="hidden fixed top-5 right-5 px-5 py-4 rounded-lg text-white font-semibold z-50 max-w-xs shadow-lg bg-green-500">
        Task added successfully
      </div>
    </div>
  );
}
