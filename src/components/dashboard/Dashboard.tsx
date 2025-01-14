'use client';

import { useState } from 'react';
import { FC } from 'react';
import { TaskStatus } from './TaskStatus';
import { TaskList } from './TaskList';
import { CompletedTasks } from './CompletedTasks';
import { Task } from '@/types/task';
import InProgressTasks from './InProgressTasks';
import TaskModal from '@/components/TaskModal/TaskModal';

const Dashboard: FC = () => {
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: "Attend Nischal's Birthday Party",
      priority: 'Moderate',
      status: 'Not Started',
      dueDate: '2023-06-20',
      createdOn: '20/06/2023',
      image: '/party.svg',
      isVital: false,
      additionalNotes: undefined,
      deadline: '',
    },
    {
      id: '2',
      title: 'Landing Page Design for TravelDays',
      description: "Finish the design by next week, as per client's request",
      priority: 'Moderate',
      status: 'Not Started',
      dueDate: '2023-06-20',
      createdOn: '20/06/2023',
      image: './travel_days.svg',
      isVital: false,
      additionalNotes: undefined,
      deadline: '',
    },
    {
      id: '3',
      title: 'Buy groceries from the supermarket',
      priority: 'Moderate',
      status: 'Not Started',
      dueDate: '2023-06-20',
      createdOn: '20/06/2023',
      image: './supermarket.svg',
      isVital: false,
      additionalNotes: undefined,
      deadline: '',
    },
  ]);

  

  const completedTasks: Task[] = [
    {
      id: '4',
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well.',
      priority: 'Moderate',
      status: 'Completed',
      dueDate: '2023-06-18',
      createdOn: '18/06/2023',
      completedDate: '2 days',
      image: '/dog.svg',
      isVital: false,
      additionalNotes: undefined,
      deadline: '',
    },
    {
      id: '5',
      title: 'Conduct meeting',
      description: 'Meet with the client and finalize requirements.',
      priority: 'High',
      status: 'Completed',
      dueDate: '2023-06-18',
      createdOn: '18/06/2023',
      completedDate: '2 days',
      image: '/meeting.svg',
      isVital: false,
      additionalNotes: undefined,
      deadline: '',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TaskList tasks={tasks} />
            <InProgressTasks />
          </div>
          <div className="space-y-6">
            <TaskStatus completed={59} inProgress={32} notStarted={9} />
            <CompletedTasks tasks={completedTasks} />
          </div>
        </div>
      </main>
    </div>
  );
  
};

export default Dashboard;
