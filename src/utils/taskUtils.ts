export const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-500';
      case 'In Progress':
        return 'text-blue-500';
      case 'Not Started':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };
  
  export const getStatusDot = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Not Started':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };