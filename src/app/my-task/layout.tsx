'use client';

import { FC, useState, ReactNode } from 'react';
import { useTaskStore } from '@/store/useTaskStore';
import TaskCard from '@/components/TaskCard/TaskCard';
import TaskModal from '@/components/TaskModal/TaskModal';
import { Task } from '@/types/task';

interface LayoutProps {
  children: ReactNode;
}

const MyTasksLayout: FC<LayoutProps> = ({ children }) => {
  const { tasks, addTask, updateTask, deleteTask, finishTask, toggleVitalTask } = useTaskStore();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleSaveTask = (updatedTask: Partial<Task>) => {
    if (editingTask) {
      updateTask(editingTask.id, updatedTask);
    } else {
      addTask({
        id: Date.now().toString(),
        ...updatedTask,
        status: 'Not Started',
        createdOn: new Date().toISOString(),
        isVital: false,
        priority: updatedTask.priority || 'Moderate',
      } as Task);
    }
    setShowModal(false);
    setEditingTask(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/2 overflow-auto border-b md:border-r border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">My Tasks</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Add Task
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
      </div>

      <div className="w-full md:w-1/2 overflow-auto bg-white">
        {children}
      </div>

      {showModal && (
        <TaskModal
          task={editingTask}
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
};

export default MyTasksLayout;
