import { useNavigate } from "react-router";
import { LogIn, LogOut } from "lucide-react";
import useTaskStore from "../store/taskStore";

const AuthButton = () => {
  const { token, handleLogout } = useTaskStore();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => handleLogout(navigate)}
      className={`flex items-center cursor-pointer gap-2 absolute top-3 right-3 px-3 py-1 text-white rounded ${
        token
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
      } transition`}
    >
      {token ? <LogIn /> : <LogOut />}
      {token ? "Log Out" : "Log In"}
    </button>
  );
};

export default AuthButton;
