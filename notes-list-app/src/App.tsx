import Sidebar from "./components/Sidebar.tsx";
import MainArea from "./components/MainArea.tsx";
import { notesStoreData } from "./store/store.ts";
import { MdMoreVert } from "react-icons/md";
import Modal from "./components/Modal.tsx";

const App = () => {
  const {
    todos,
    editIndex,
    handleUpdate,
    editText,
    dropdownIndex,
    handleEdit,
    handleDropdownClick,
    deleteTodo,
    setEditIndex,
    setEditText,
  } = notesStoreData();
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <MainArea />
        <main className="mt-6">
          <h2 className="text-2xl font-semibold m-4 ">Todo List</h2>
          <ul className="pl-5 list-disc">
            {todos.map((todo, index) => (
              <li key={index} className="mb-2 ml-[2rem]">
                {editIndex === index ? (
                  <div>
                    <input
                      title="editText"
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border border-gray-300 p-1 rounded-lg mr-2"
                    />
                    <button
                      type="button"
                      onClick={() => handleUpdate(index)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditIndex(null)}
                      className="bg-red-500 px-4 py-2 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="relative flex justify-between items-center">
                    <div className="m-1">
                      <span className="mr-4">
                        <strong>{todo.text}</strong>(list: {todo.list})
                        Workspace: {todo.workspace}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdMoreVert
                        className="cursor-pointer"
                        size={24}
                        onClick={() => handleDropdownClick(index)}
                      />
                      {dropdownIndex === index && (
                        <div className="absolute right-6 mt-5 bg-white border border-gray-300 rounded shadow-lg">
                          <button
                            onClick={() => handleEdit(index)}
                            type="button"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => deleteTodo(index)}
                            type="button"
                            className="block px-4 py-2 text-red-700 hover:bg-red-200 w-full text-left"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </main>
      </div>
      <Modal />
    </div>
  );
};
export default App;
