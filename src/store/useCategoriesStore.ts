import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Categories {
  id: number;
  name: string;
}

interface CategoriesStore {
  taskStatuses: Categories[];
  taskPriorities: Categories[];
  addTask: (type: "status" | "priority", name: string) => void;
  editTask: (type: "status" | "priority", id: number, name: string) => void;
  deleteTask: (type: "status" | "priority", id: number) => void;
}

export const useCategoriesStore = create(
  persist<CategoriesStore>(
    (set) => ({
      taskStatuses: [
        { id: 1, name: "Completed" },
        { id: 2, name: "In Progress" },
        { id: 3, name: "Not Started" },
      ],
      taskPriorities: [
        { id: 1, name: "Extreme" },
        { id: 2, name: "Moderate" },
        { id: 3, name: "Low" },
      ],
      addTask: (type, name) =>
        set((state) => {
          const tasks = type === "status" ? state.taskStatuses : state.taskPriorities;
          const newTask = { id: tasks.length + 1, name };
          return {
            ...state,
            [type === "status" ? "taskStatuses" : "taskPriorities"]: [...tasks, newTask],
          };
        }),
      editTask: (type, id, name) =>
        set((state) => {
          const tasks = type === "status" ? state.taskStatuses : state.taskPriorities;
          return {
            ...state,
            [type === "status" ? "taskStatuses" : "taskPriorities"]: tasks.map((task) =>
              task.id === id ? { ...task, name } : task
            ),
          };
        }),
      deleteTask: (type, id) =>
        set((state) => {
          const tasks = type === "status" ? state.taskStatuses : state.taskPriorities;
          return {
            ...state,
            [type === "status" ? "taskStatuses" : "taskPriorities"]: tasks.filter(
              (task) => task.id !== id
            ),
          };
        }),
    }),
    {
      name: "categories-storage", 
    }
  )
);
