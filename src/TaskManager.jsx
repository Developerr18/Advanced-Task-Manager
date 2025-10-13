import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskColumns from "./components/TaskColumns";
import EditModel from "./components/EditModel";
import useTaskStore from "./store/taskStore";
import { ToastContainer } from "react-toastify";

export default function TaskManager() {
  const { isEditModalOpen } = useTaskStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 p-5">
      <main
        className={`max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isEditModalOpen ? "blur-sm" : ""
        }`}
      >
        <Header />
        <section className="p-8 border-b border-gray-200 space-y-6">
          <TaskForm />
          <TaskFilters />
        </section>
        <TaskColumns />
      </main>

      <EditModel />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
}
