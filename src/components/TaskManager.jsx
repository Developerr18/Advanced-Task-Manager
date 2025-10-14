import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskFilters from "./TaskFilters";
import TaskColumns from "./TaskColumns";
import EditModel from "./EditModel";
import useTaskStore from "../store/taskStore";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import AuthButton from "./AuthButton";

export default function TaskManager() {
  const { isEditModalOpen } = useTaskStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 p-12">
      <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
