const Header = () => {
  return (
    <div className="flex flex-col items-center rounded-t p-7 text-white bg-indigo-500">
      <h1 className="sm:text-4xl text-3xl font-bold mb-2">
        Advanced Task Manager
      </h1>
      <p>Organize your tasks with priority, categories, and smart filtering</p>
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">5</div>
          <div>Total Tasks</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">1</div>
          <div>Completed Tasks</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">4</div>
          <div>Pending Tasks</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
