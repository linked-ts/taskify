import { useState, useEffect } from 'react';
import { Task } from '@/types/task';

interface TaskModalProps {
  task?: Task | null;
  onClose: () => void;
  onSave: (task: Partial<Task>) => void;
}

export default function TaskModal({ task, onClose, onSave }: TaskModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Moderate' as 'High' | 'Moderate' | 'Low',
    date: '',
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        priority: task.priority || 'Moderate',
        date: task.createdOn
          ? new Date(task.createdOn).toISOString().split('T')[0]
          : '',
      });
    }
  }, [task]);

  const handleSubmit = () => {
    if (!formData.title || !formData.date) {
      alert('Title and Date are required!');
      return;
    }
    onSave({
      ...formData,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg p-8 w-[600px] shadow-lg z-60">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{task ? 'Edit Task' : 'Add Task'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            Go Back
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <div className="flex space-x-4">
              {['High', 'Moderate', 'Low'].map((priority) => (
                <label key={priority} className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    checked={formData.priority === priority}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        priority: e.target.value as 'High' | 'Moderate' | 'Low',
                      })
                    }
                    className="mr-2"
                  />
                  {priority}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Task Description
            </label>
            <textarea
              className="w-full border rounded-md p-2 h-32"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Start writing here..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSubmit}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              {task ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
