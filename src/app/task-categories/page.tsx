'use client';
import { useState } from "react";
import { useCategoriesStore } from "@/store/useCategoriesStore"; 
import CModal from "@/components/dashboard/CModal/CModal";

const TaskCategories = () => {
  const { taskStatuses, taskPriorities, addTask, editTask, deleteTask } = useCategoriesStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"status" | "priority">("status");
  const [modalAction, setModalAction] = useState<"add" | "edit">("add");
  const [currentTask, setCurrentTask] = useState<{ id?: number; name?: string }>({});

  const handleOpenModal = (type: "status" | "priority", action: "add" | "edit", task?: { id: number; name: string }) => {
    setModalType(type);
    setModalAction(action);
    setCurrentTask(task || {});
    setModalOpen(true);
  };

  const handleSave = (name: string) => {
    if (modalAction === "add") {
      addTask(modalType, name);
    } else if (modalAction === "edit" && currentTask.id) {
      editTask(modalType, currentTask.id, name);
    }
    setModalOpen(false);
  };

  const handleDelete = (type: "status" | "priority", id: number) => {
    deleteTask(type, id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Categories</h1>


      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Task Status</h2>
        <button
          onClick={() => handleOpenModal("status", "add")}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Task Status
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">SN</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskStatuses.map((status) => (
              <tr key={status.id}>
                <td className="border border-gray-300 px-4 py-2">{status.id}</td>
                <td className="border border-gray-300 px-4 py-2">{status.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleOpenModal("status", "edit", status)}
                    className="bg-orange-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-red-500 px-3 py-1 rounded"
                    onClick={() => handleDelete("status", status.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div>
        <h2 className="text-xl font-semibold mb-2">Task Priority</h2>
        <button
          onClick={() => handleOpenModal("priority", "add")}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Task Priority
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">SN</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskPriorities.map((priority) => (
              <tr key={priority.id}>
                <td className="border border-gray-300 px-4 py-2">{priority.id}</td>
                <td className="border border-gray-300 px-4 py-2">{priority.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleOpenModal("priority", "edit", priority)}
                    className="bg-orange-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-red-500 px-3 py-1 rounded"
                    onClick={() => handleDelete("priority", priority.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <CModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialValue={currentTask.name}
        title={`${modalAction === "add" ? "Add" : "Edit"} ${modalType === "status" ? "Task Status" : "Task Priority"}`}
      />
    </div>
  );
};

export default TaskCategories;
