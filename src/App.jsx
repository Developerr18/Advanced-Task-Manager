import { Route, Routes } from "react-router";
import AuthForm from "./components/AuthForm";
import TaskManager from "./components/TaskManager";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/dashboard" element={<TaskManager />} />
    </Routes>
  );
}
