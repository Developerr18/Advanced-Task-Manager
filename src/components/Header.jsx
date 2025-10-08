const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-2">Advanced Task Manager</h1>
      <p className="text-lg opacity-90">
        Organize your tasks with priority, categories, and smart filtering
      </p>

      <div className="flex justify-center gap-8 mt-6">
        <div className="text-center">
          <div className="text-3xl font-bold">0</div>
          <div className="text-sm opacity-90">Total Tasks</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">0</div>
          <div className="text-sm opacity-90">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">0</div>
          <div className="text-sm opacity-90">Pending</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
