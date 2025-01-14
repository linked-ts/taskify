import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '../types/task';

interface TaskStore {
  [x: string]: any;
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleVitalTask: (id: string) => void;
  finishTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (id, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
        toggleVitalTask: (id) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, isVital: !task.isVital } : task
            ),
          })),
        finishTask: (id) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, status: "Completed" } : task
            ),
          })),
      
    }),
    {
      name: 'task-store', 
    }
  )
);
