import { notesStoreData } from "../store/store.ts";
import { FaPlus } from "react-icons/fa";

const MainArea = () => {
  const {
    lists,
    workspaces,
    selectedList,
    selectedWorkspace,
    todoText,
    setSelectedList,
    setSelectedWorkspace,
    setTodoText,
    handleAddTodo,
  } = notesStoreData();
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <div className="mt-2 flex items-center">
          <select
            title="selectedList"
            name="selectedList"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg mr-2"
          >
            <option value="" disabled>
              Select List
            </option>
            {lists.map((list, index) => (
              <option value={list.name} key={index}>
                {list.name} {list.emoji}
              </option>
            ))}
          </select>
          <select
            title="selectedWorkspace"
            name="selectedWorkspace"
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg m-2"
          >
            <option value="" disabled>
              Select Workspace
            </option>
            {workspaces.map((workspace, index) => (
              <option value={workspace.name} key={index}>
                {workspace.emoji} {workspace.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="bg-black px-4 py-2 text-[0.9rem]  flex rounded-lg items-center gap-1 m-2 text-white hover:bg-gray-700"
            onClick={handleAddTodo}
          >
            <FaPlus /> Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainArea;

