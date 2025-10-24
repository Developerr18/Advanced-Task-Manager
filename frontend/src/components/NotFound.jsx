import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-red-500 text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go Home
      </button>
    </div>
  );
}
