import useTaskStore from "../store/taskStore";

const Header = () => {
  const { tasks } = useTaskStore();

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <header className="bg-gradient-to-r bg-white/10 border border-white/20 from-slate-800 via-purple-800 to-slate-800 text-white p-8 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Advanced Task Manager
      </h1>
      <p className="text-sm sm:text-lg opacity-90">
        Organize your tasks with priority, categories, and smart filtering
      </p>

      <div className="flex justify-center gap-8 mt-6">
        <div className="text-center">
          <div className="text-3xl font-bold">{tasks.length}</div>
          <div className="text-sm opacity-90">Total Tasks</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{completedTasks.length}</div>
          <div className="text-sm opacity-90">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">
            {tasks.length - completedTasks.length}
          </div>
          <div className="text-sm opacity-90">Pending</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
