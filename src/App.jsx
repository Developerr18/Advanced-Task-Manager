import { Route, Routes } from "react-router";
import AuthForm from "./components/AuthForm";
import TaskManager from "./components/TaskManager";
import MyAuthForm from "./components/MyAuthForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/dashboard" element={<TaskManager />} />
      <Route path="/myauthform" element={<MyAuthForm />} />
    </Routes>
  );
}
