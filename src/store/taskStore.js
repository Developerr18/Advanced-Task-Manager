import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultData = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    category: "Category 1",
    priority: "High",
    status: "todo",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    category: "Category 2",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    category: "Category 3",
    priority: "Low",
    status: "completed",
  },
];

// create store
const useTaskStore = create(
  persist(
    (set) => ({
      tasks: defaultData,
      selectedTask: null,
      isEditModalOpen: false,

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, status: "todo" }],
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
