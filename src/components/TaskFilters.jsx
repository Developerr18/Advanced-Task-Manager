const TaskFilters = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 w-full">
      <div className="flex items-center w-full sm:flex-1">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          placeholder="Search tasks..."
          className="ml-2 border border-gray-300 rounded p-2 w-full"
          id="search"
        />
      </div>
      <div className="flex items-center w-full sm:flex-1">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          className="border border-gray-300 p-2 rounded ml-2 w-full"
        >
          <option value="all-categories">All Categories</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
          <option value="personal">Personal</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex items-center w-full sm:flex-1">
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          className="border border-gray-300 p-2 rounded ml-2 w-full"
        >
          <option value="all-priorities">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex items-center w-full sm:flex-1">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          className="border border-gray-300 p-2 rounded ml-2 w-full"
        >
          <option value="date-created">Date Created</option>
          <option value="duedate">Due Date</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;
