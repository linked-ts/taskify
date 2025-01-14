'use client';

import { FC } from 'react';
import { useVitalTasks } from '@/store/taskSelectors';
import TaskCard from '@/components/TaskCard/TaskCard';
import { useTaskStore } from '@/store/useTaskStore';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const VitalTasksPage: FC<LayoutProps> = ({ children }) => {
  const { deleteTask, toggleVitalTask, finishTask } = useTaskStore();
  const vitalTasks = useVitalTasks();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 overflow-auto border-r border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Vital Tasks</h1>
          </div>

          <div className="space-y-4">
            {vitalTasks.length > 0 ? (
              vitalTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={() => {}}
                  onDelete={() => deleteTask(task.id)}
                  onToggleVital={() => toggleVitalTask(task.id)}
                  onFinish={() => finishTask(task.id)}
                />
              ))
            ) : (
              <div className="text-gray-500">No vital tasks found.</div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/2 overflow-auto bg-white">
        {children}
      </div>
    </div>
  );
};

export default VitalTasksPage;
