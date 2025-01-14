import { FC } from 'react';
import { Task } from '@/types/task';
import Image from 'next/image';

interface CompletedTasksProps {
  tasks: Task[];
}

export const CompletedTasks: FC<CompletedTasksProps> = ({ tasks }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <Image src="/taskCompleted.svg" width={24} height={24} alt="Completed" />
    <h2 className="text-base sm:text-lg font-medium">Completed Tasks</h2>
  </div>
  <div className="space-y-4">
    {tasks.map((task) => (
      <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-sm sm:text-base flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              {task.title}
            </h3>
            {task.description && (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{task.description}</p>
            )}
            <div className="text-xs sm:text-sm text-gray-500 mt-2">
              Completed {task.completedDate} ago
            </div>
          </div>
          {task.image && (
            <div className="w-12 sm:w-16 h-12 sm:h-16 flex-shrink-0">
              <Image src={task.image} alt={task.title} width={64} height={64} />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};