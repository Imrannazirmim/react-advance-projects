import { notesStoreData } from "../store/store";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal } =
    notesStoreData();
  return (
    <div className="w-60 bg-[#f9f9f9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists </h3>
          {/*    render list*/}
          <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center gap-2"
              >
                <span>{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>
          <button onClick={openListModal} className="flex items-center m-4">
            <FaPlus className="mr-2" /> List
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Workspace</h3>
          {/*  render to workspace*/}
          <ul>
            {workspaces.map((workspace, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center gap-2"
              >
                <span>{workspace.emoji}</span>
                {workspace.name}
              </li>
            ))}
          </ul>
          <button
          type="button"
            onClick={openWorkspaceModal}
            className="flex items-center m-4"
          >
            <FaPlus className="mr-2" />
            Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
