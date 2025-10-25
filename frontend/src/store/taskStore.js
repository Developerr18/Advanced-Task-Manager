import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  backendURL: import.meta.env.VITE_BACKEND_URL,
  tasks: [],
  token: null,
  selectedTask: null,
  isEditModelOpen: false,
  searchTerm: "",
  selectedPriority: "All",
  selectedCategory: "All",
  sortBy: "",
};

// create store
const useTaskStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      setToken: (token) => set({ token }),

      // get tasks
      fetchTasks: async () => {
        const { token, backendURL } = get();
        if (token) {
          try {
            const res = await axios.get(`${backendURL}/api/tasks/get`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            if (res.data?.data?.length === 0) {
              toast.error(res.data.message);
            }
            if (res.data.success) {
              set({ tasks: res.data.data });
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      // handle logout
      handleLogout: (navigate) => {
        const { token } = get();
        if (token) {
          set({ ...initialState });
          localStorage.removeItem("task-storage");
        } else {
          navigate("/");
        }
      },

      // add task
      addTask: async (task) => {
        const { token, backendURL } = get();

        const newTask = {
          title: task.title,
          description: task.description || "No description",
          category: task.category || "other",
          priority: task.priority || "medium",
          createdAt: new Date(),
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          status: "todo",
        };

        if (token) {
          try {
            const res = await axios.post(
              `${backendURL}/api/tasks/create`,
              newTask,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (res.data.success) {
              set((state) => ({ tasks: [...state.tasks, res.data.data] }));
              toast.success(res.data.message);
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      // delete task
      handleDeleteTask: async (id) => {
        const { token, backendURL } = get();
        set((state) => ({ tasks: state.tasks.filter((t) => t._id !== id) }));

        if (token) {
          try {
            const res = await axios.delete(
              `${backendURL}/api/tasks/delete/${id}`
            );
            if (res.data.success) {
              toast.success(res.data.message);
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      // update task
      handleStartTask: async (id) => {
        const { token, backendURL } = get();

        set((state) => ({
          tasks: state.tasks.map((task) =>
            task._id === id ? { ...task, status: "inProgress" } : task
          ),
        }));

        if (token) {
          try {
            const res = await axios.put(
              `${backendURL}/api/tasks/update/${id}`,
              {
                status: "inProgress",
              }
            );
            if (res.data.success) {
              toast.success(res.data.message);
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      // update task
      handleCompleteTask: async (id) => {
        const { token, backendURL } = get();
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task._id === id ? { ...task, status: "completed" } : task
          ),
        }));

        if (token) {
          try {
            const res = await axios.put(
              `${backendURL}/api/tasks/update/${id}`,
              {
                status: "completed",
              }
            );
            if (res.data.success) {
              toast.success(res.data.message);
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      openEditModal: (task) =>
        set({ selectedTask: task, isEditModalOpen: true }),

      closeEditModal: () => set({ selectedTask: null, isEditModalOpen: false }),

      // update task
      updateTask: async (updatedTask) => {
        const { backendURL, token } = get();

        set((state) => ({
          tasks: state.tasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          ),
        }));

        if (token) {
          try {
            const res = await axios.put(
              `${backendURL}/api/tasks/update/${updatedTask._id}`,
              updatedTask
            );
            if (res.data.success) {
              toast.success(res.data.message);
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
          }
        }
      },

      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedPriority: (priority) => set({ selectedPriority: priority }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setSortBy: (sortBy) => set({ sortBy }),

      filteredTasks: () => {
        const {
          tasks,
          searchTerm,
          selectedPriority,
          selectedCategory,
          sortBy,
        } = get();

        return tasks
          .filter((task) => {
            const matchesSearch = task.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());

            const matchesPriority =
              selectedPriority === "All" ||
              task.priority.toLowerCase() === selectedPriority.toLowerCase();

            const matchesCategory =
              selectedCategory === "All" ||
              task.category.toLowerCase() === selectedCategory.toLowerCase();

            return matchesSearch && matchesPriority && matchesCategory;
          })
          .sort((a, b) => {
            if (sortBy === "title") return a.title.localeCompare(b.title);
            if (sortBy === "priority") {
              const order = { high: 1, medium: 2, low: 3 };
              return (
                order[a.priority.toLowerCase()] -
                order[b.priority.toLowerCase()]
              );
            }
            if (sortBy === "dueDate")
              return new Date(a.dueDate) - new Date(b.dueDate);
            if (sortBy === "created")
              return new Date(a.createdAt) - new Date(b.createdAt);
            return 0;
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
// UmMufg0q6PohshMr

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
