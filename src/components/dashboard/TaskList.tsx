'use client';

import { FC, useState } from 'react';
import { Task } from '@/types/task';
import Image from 'next/image';
import TaskModal from '../TaskModal/TaskModal';
import { useTaskStore } from '@/store/useTaskStore';
import TaskCard from '../TaskCard/TaskCard';

interface TaskListProps {
  tasks: Task[]
}

export const TaskList: FC<TaskListProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const { tasks, addTask, updateTask, deleteTask, toggleVitalTask, finishTask } = useTaskStore();

  const handleSaveTask = (task: Partial<Task>) => {
    if (taskToEdit) {
      updateTask(taskToEdit.id, task); 
    } else {
      const newTaskWithId: Task = {
        id: Date.now().toString(),
        ...task,
        status: 'Not Started',
        createdOn: new Date().toISOString(),
        isVital: false,
        priority: task.priority || 'Moderate',
        dueDate: task.dueDate || new Date().toISOString(),
      } as Task;

      addTask(newTaskWithId);
    }

    setTaskToEdit(null); 
    setIsModalOpen(false); 
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task); 
    setIsModalOpen(true); 
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-2">
      <Image src="/todo.svg" width={24} height={24} alt="To-Do" />
      <h2 className="text-base sm:text-lg font-medium">To-Do</h2>
    </div>
    <button
      className="flex items-center gap-2 text-red-500 text-sm sm:text-base"
      onClick={() => {
        setTaskToEdit(null);
        setIsModalOpen(true);
      }}
    >
      <span>Add task</span>
      <span className="text-lg sm:text-xl">+</span>
    </button>
  </div>
  <div className="space-y-4">
    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onEdit={() => handleEditTask(task)}
        onDelete={() => deleteTask(task.id)}
        onToggleVital={() => toggleVitalTask(task.id)}
        onFinish={() => finishTask(task.id)}
      />
    ))}
  </div>
</div>

  );
};
