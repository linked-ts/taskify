import { FC } from 'react';
import { CircleProgress } from './CircleProgress';
import Image from 'next/image';

interface TaskMetrics {
  completed: number;
  inProgress: number;
  notStarted: number;
}

export const TaskStatus: FC<TaskMetrics> = ({ completed, inProgress, notStarted }) => {
  const total = completed + inProgress + notStarted;
  const completedPercentage = Math.round((completed / total) * 100);
  const inProgressPercentage = Math.round((inProgress / total) * 100);
  const notStartedPercentage = Math.round((notStarted / total) * 100);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-2">
      <Image src="/taskStatus.svg" width={24} height={24} alt="Task Status" />
      <h2 className="text-base sm:text-lg font-medium">Task Status</h2>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex flex-col items-center">
      <div className="relative">
        <CircleProgress percentage={completedPercentage} color="text-green-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm sm:text-lg font-semibold">{completedPercentage}%</span>
        </div>
      </div>
      <span className="text-xs sm:text-sm mt-2 text-green-500">Completed</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="relative">
        <CircleProgress percentage={inProgressPercentage} color="text-blue-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm sm:text-lg font-semibold">{inProgressPercentage}%</span>
        </div>
      </div>
      <span className="text-xs sm:text-sm mt-2 text-blue-500">In Progress</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="relative">
        <CircleProgress percentage={notStartedPercentage} color="text-red-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm sm:text-lg font-semibold">{notStartedPercentage}%</span>
        </div>
      </div>
      <span className="text-xs sm:text-sm mt-2 text-red-500">Not Started</span>
    </div>
  </div>
</div>

  );
};
