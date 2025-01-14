import { useState } from "react";

interface CModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
  initialValue?: string;
  title: string;
}

const CModal: React.FC<CModalProps> = ({ isOpen, onClose, onSave, initialValue = "", title }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(inputValue);
              onClose();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CModal;
