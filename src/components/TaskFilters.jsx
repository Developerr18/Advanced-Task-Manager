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
    <div className="flex gap-7 mt-15 items-center flex-wrap">
      <div className="flex items-center gap-2">
        <label className="text-md font-medium text-slate-200 mb-2">
          Search:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-md font-medium text-slate-200 mb-2">
          Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
        >
          <option className="text-black" value="All">
            All Categories
          </option>
          <option className="text-black" value="work">
            Work
          </option>
          <option className="text-black" value="personal">
            Personal
          </option>
          <option className="text-black" value="shopping">
            Shopping
          </option>
          <option className="text-black" value="health">
            Health
          </option>
          <option className="text-black" value="education">
            Education
          </option>
          <option className="text-black" value="other">
            Other
          </option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium text-md text-slate-200 mb-2">
          Priority:
        </label>
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
        >
          <option className="text-black" value="All">
            All Priorities
          </option>
          <option className="text-black" value="high">
            High
          </option>
          <option className="text-black" value="medium">
            Medium
          </option>
          <option className="text-black" value="low">
            Low
          </option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium text-md text-slate-200 mb-2">
          Sort by:
        </label>
        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition">
          <option className="text-black" value="created">
            Date Created
          </option>
          <option className="text-black" value="dueDate">
            Due Date
          </option>
          <option className="text-black" value="priority">
            Priority
          </option>
          <option className="text-black" value="title">
            Title
          </option>
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
