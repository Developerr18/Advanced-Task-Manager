import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultData = [
  {
    id: 1,
    title: "play with cat!",
    description: "Description 1",
    category: "personal",
    priority: "High",
    status: "todo",
    createdAt: new Date(),
    dueDate: "2025-10-15",
  },
  {
    id: 2,
    title: "workout",
    description: "Description 2",
    category: "health",
    priority: "Medium",
    status: "inProgress",
    createdAt: new Date(),
    dueDate: "2025-10-17",
  },
  {
    id: 3,
    title: "read a book",
    description: "Description 3",
    category: "education",
    priority: "Low",
    status: "completed",
    createdAt: new Date(),
    dueDate: "2025-10-19",
  },
];

// create store
const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: defaultData,
      selectedTask: null,
      isEditModalOpen: false,
      searchTerm: "",
      selectedPriority: "All",
      selectedCategory: "All",

      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              status: "todo",
              createdAt: new Date(),
            },
          ],
        })),

      handleDeleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

      handleStartTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: "inProgress" } : task
          ),
        })),

      handleCompleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: "completed" } : task
          ),
        })),

      openEditModal: (task) =>
        set({ selectedTask: task, isEditModalOpen: true }),

      closeEditModal: () => set({ selectedTask: null, isEditModalOpen: false }),

      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        })),

      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedPriority: (priority) => set({ selectedPriority: priority }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),

      filteredTasks: () => {
        const { tasks, searchTerm, selectedPriority, selectedCategory } = get();

        return tasks.filter((task) => {
          const matchesSearch =
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (task.description &&
              task.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()));
          const matchesPriority =
            selectedPriority === "All" ||
            task.priority.toLowerCase() === selectedPriority.toLowerCase();
          const matchesCategory =
            selectedCategory === "All" ||
            task.category.toLowerCase() === selectedCategory.toLowerCase();

          return matchesSearch && matchesPriority && matchesCategory;
        });
      },

      clearFilters: () =>
        set({
          searchTerm: "",
          selectedPriority: "All",
          selectedCategory: "All",
        }),
    }),
    {
      name: "task-storage", // 🔹 name of the key in localStorage
    }
  )
);

export default useTaskStore;

// without persist middleware
/*
const useTaskStore = create((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // 🔹 Load from localStorage initially

  addTask: (task) =>
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // 🔹 Save to localStorage
      return { tasks: updatedTasks };
    }),

  removeTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((t) => t.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // 🔹 Save to localStorage
      return { tasks: updatedTasks };
    }),

  clearTasks: () => {
    localStorage.removeItem('tasks'); // 🔹 Remove from storage
    set({ tasks: [] });
  },
}));
*/
