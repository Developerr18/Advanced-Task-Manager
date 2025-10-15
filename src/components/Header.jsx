import useTaskStore from "../store/taskStore";

const Header = () => {
  const { tasks } = useTaskStore();

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <header className="text-white mb-5 p-8 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-3">
        Advanced Task Manager
      </h1>
      <p className="text-sm sm:text-md opacity-90">
        Organize your tasks with priority, categories, and smart filtering
      </p>

      <div className="flex justify-center gap-10 mt-8">
        <div className="text-center">
          <div className="text-4xl mb-2 font-bold">{tasks.length}</div>
          <div className="text-sm opacity-90">Total Tasks</div>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2 font-bold">{completedTasks.length}</div>
          <div className="text-sm opacity-90">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2 font-bold">
            {tasks.length - completedTasks.length}
          </div>
          <div className="text-sm opacity-90">Pending</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
