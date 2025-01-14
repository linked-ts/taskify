'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTaskStore } from '@/store/useTaskStore';
import TaskModal from '@/components/TaskModal/TaskModal';
import { useState } from 'react';
import { Task } from '@/types/task';

export default function TaskDetail() {
  const priorityColors = {
    High: 'text-red-500',
    Moderate: 'text-blue-500',
    Low: 'text-green-500',
  };

  const params = useParams();
  const router = useRouter();
  const { tasks, deleteTask, updateTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const task = tasks.find((t) => t.id === params.id);

  if (!task) {
    return (
      <div className="p-6 flex items-center justify-center h-full text-gray-500">
        Task not found
      </div>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    router.push('/my-task');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedTask: Partial<Task>) => {
    updateTask(task.id, updatedTask); 
    setIsEditing(false); 
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-semibold mb-2">
                Title: <span className='text-red-500'>{task.title}</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold mb-2">
                Description: <span className='text-red-500'>{task.description}</span>
              </h1>
            </div>

            {task.additionalNotes && task.additionalNotes.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-3">Additional Notes</h2>
                <ul className="space-y-2">
                  {task.additionalNotes.map((note, index) => (
                    <li
                      key={index}
                      className="text-gray-600 leading-relaxed flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg mt-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Priority</h3>
                <p className={`${priorityColors[task.priority]} mr-2`}>{task.priority}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                <p className="text-gray-900">{task.status}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Created On</h3>
                <p className="text-gray-900">
                  {new Date(task.createdOn).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditing && (
        <TaskModal
          task={task}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
