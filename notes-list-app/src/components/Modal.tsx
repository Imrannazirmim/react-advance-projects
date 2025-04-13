import { notesStoreData } from "../store/store.ts";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const {
    isListModelOpen,
    isWorkspaceModalOpen,
    modalName,
    modalEmoji,
    modalType,
    setModalName,
    setModalEmoji,
    handleSaveModal,
    closeListModal,
    closeWorkspaceModal,
  } = notesStoreData();

  const handleClose = () => {
    if (modalType === "List") {
      closeListModal();
    } else if (modalType === "Workspace") {
      closeWorkspaceModal();
    }
  };

  if (!isListModelOpen && !isWorkspaceModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{`Create New ${modalType}`}</h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900 "
          >
            <FaTimes size={20} />
          </button>
        </div>
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} Name`}
          className="w-full p-2 rounded-lg border border-gray-300 mb-4"
        />
        <input
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder="Enter emoji (optional) "
          className="w-full p-2 rounded-lg border border-gray-300 mb-4"
        />
        <button
        type="button"
          onClick={handleSaveModal}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default Modal;
