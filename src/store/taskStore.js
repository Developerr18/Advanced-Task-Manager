import { create } from "zustand";
import { persist } from "zustand/middleware";

// create store
const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { ...task, isStarted: false, isCompleted: false },
          ],
        })),

      handleDeleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

      handleStartTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isStarted: true } : task
          ),
        })),

      handleCompleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: true } : task
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
