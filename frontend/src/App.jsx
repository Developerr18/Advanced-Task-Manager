import { Route, Routes } from "react-router";
import AuthForm from "./components/AuthForm";
import TaskManager from "./components/TaskManager";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={2000} position="top-right" />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<TaskManager />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
