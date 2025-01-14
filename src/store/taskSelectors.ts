import { useMemo } from 'react';
import { useTaskStore } from './useTaskStore';
import { Task } from '@/types/task';

export const useVitalTasks = () => {
  const tasks = useTaskStore((state) => state.tasks);


  return useMemo(() => tasks.filter((task) => task.isVital), [tasks]);
};

export const useTasksByStatus = (status: Task['status']) => {
  const tasks = useTaskStore((state) => state.tasks);

  return useMemo(() => tasks.filter((task) => task.status === status), [tasks, status]);
};

export const useTask = (taskId: string) => {
  const tasks = useTaskStore((state) => state.tasks);

  return useMemo(() => tasks.find((task) => task.id === taskId), [tasks, taskId]);
};
