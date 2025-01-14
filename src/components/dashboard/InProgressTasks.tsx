import Image from 'next/image';
const InProgressTasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Landing page for TravelDays',
      description: "Finish the design by next week as per client's request.",
      priority: 'Moderate',
      status: 'In Progress',
      image: '/travel_days.svg',
      dueDate: '19/06/2023',
    }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full">
  <div className="flex items-center mb-4">
    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
    <h2 className="text-base sm:text-lg font-semibold">In Progress</h2>
  </div>
  <div className="space-y-4">
    {tasks.map((task) => (
      <div
        key={task.id}
        className="flex items-center border border-gray-200 p-4 rounded-lg"
      >
        <Image
          src={task.image}
          alt={task.title}
          width={50}
          height={50}
          className="rounded-md"
        />
        <div className="ml-4 flex-1">
          <h3 className="font-medium text-gray-800 text-sm sm:text-base">
            {task.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">{task.description}</p>
          <p className="text-xs text-gray-500">Priority: {task.priority}</p>
        </div>
        <div className="text-xs text-gray-500">
          <p>Due: {task.dueDate}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default InProgressTasks;