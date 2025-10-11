import useTaskStore from "../store/taskStore";

const TaskFilters = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedPriority,
    setSelectedPriority,
    selectedCategory,
    setSelectedCategory,
    clearFilters,
  } = useTaskStore();

  return (
    <div className="flex gap-4 items-center flex-wrap">
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700">Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
        >
          <option value="All">All Categories</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700">Priority:</label>
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
        >
          <option value="All">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700">Sort by:</label>
        <select className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors">
          <option value="created">Date Created</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      <button
        onClick={clearFilters}
        className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-200 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default TaskFilters;
