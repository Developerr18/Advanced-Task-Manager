import { useNavigate } from "react-router";
import { LogIn, LogOut } from "lucide-react";

const AuthButton = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        isLoggedIn ? setIsLoggedIn(false) : navigate("/");
      }}
      className={`flex items-center cursor-pointer gap-2 absolute top-3 right-3 px-3 py-1 text-white rounded ${
        isLoggedIn
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
      } transition`}
    >
      {isLoggedIn ? <LogIn /> : <LogOut />}
      {isLoggedIn ? "Log Out" : "Log In"}
    </button>
  );
};

export default AuthButton;
