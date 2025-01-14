'use client';

import Image from 'next/image';
import { Task } from '@/types/task';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onToggleVital: () => void;
  onFinish: () => void;
}

export default function TaskCard({ 
  task,
  onEdit, 
  onDelete,
  onToggleVital,
  onFinish
}: TaskCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const priorityColors = {
    High: 'text-red-500',
    Moderate: 'text-blue-500',
    Low: 'text-green-500',
  };

  const handleTaskClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.menu-container')) {
      router.push(`/my-task/${task.id}`);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      onClick={handleTaskClick}
      className="bg-white rounded-lg p-4 mb-4 flex items-start space-x-4 relative cursor-pointer shadow-md hover:shadow-lg transition-all duration-200"
    >
      <div className="flex-grow">
        <h3 className="font-medium">{task.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className={`${priorityColors[task.priority]} mr-2`}>
            Priority: {task.priority}
          </span>
          <span className="text-gray-500">Status: {task.status}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Created on: {new Date(task.createdOn).toLocaleDateString()}
        </p>
      </div>

      <div className="relative flex items-center menu-container" onClick={stopPropagation}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg 
            className="w-5 h-5 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
        
        {isMenuOpen && (
          <div 
            className="absolute top-full right-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-10"
            onClick={stopPropagation}
          >
            <ul className="py-2">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onToggleVital();
                  setIsMenuOpen(false);
                }}
              >
                {task.isVital ? 'Remove from Vital' : 'Mark as Vital'}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onEdit();
                  setIsMenuOpen(false);
                }}
              >
                Edit
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onDelete();
                  setIsMenuOpen(false);
                }}
              >
                Delete
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onFinish();
                  setIsMenuOpen(false);
                }}
              >
                Finish
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}