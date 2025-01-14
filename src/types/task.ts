export type Priority = 'Low' | 'Moderate' | 'High';
export type Status = 'Not Started' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'High' | 'Moderate' | 'Low';
  status: 'Not Started' | 'In Progress' | 'Completed';
  createdOn: string;
  dueDate: string;
  image?: string;
  isVital: boolean;
  additionalNotes?: string[];
  completedDate?: string;
  objective?: string;
  deadline: string;
}

export interface TaskImage {
  id: string;
  taskId: string;
  url: string;
  order: number;
}