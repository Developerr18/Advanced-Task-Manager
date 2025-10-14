import { Route, Routes } from "react-router";
import AuthForm from "./components/AuthForm";
import TaskManager from "./components/TaskManager";
import TaskForm from "./components/DateExp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/dashboard" element={<TaskManager />} />
      <Route path="/dateexp" element={<TaskForm />} />
    </Routes>
  );
}
