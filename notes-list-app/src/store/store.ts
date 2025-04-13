import { create } from "zustand/react";

interface List {
  name: string;
  emoji: string;
}

interface Workspace {
  name: string;
  emoji: string;
}

interface Todo {
  text: string;
  list: string;
  workspace: string;
}

interface AppStateProps {
  lists: List[];
  workspaces: Workspace[];
  todos: Todo[];
  todoText: string;
  editIndex: number | null;
  editText: string;
  dropdownIndex: number | null;
  isListModelOpen: boolean;
  selectedList: string;
  selectedWorkspace: string;
  isWorkspaceModalOpen: boolean;
  modalName: string;
  modalEmoji: string;
  modalType: "List" | "Workspace" | null;
  addList: (name: string, emoji: string) => void;
  addWorkspace: (name: string, emoji: string) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (index: number, updatedTodo: Todo) => void;
  deleteTodo: (index: number) => void;
  handleEdit: (index: number) => void;
  handleUpdate: (index: number) => void;
  handleDropdownClick: (index: number) => void;
  setEditText: (text: string) => void;
  setEditIndex: (index: number | null) => void;
  openListModal: () => void;
  closeListModal: () => void;
  openWorkspaceModal: () => void;
  closeWorkspaceModal: () => void;
  setSelectedList: (list: string) => void;
  setSelectedWorkspace: (workspace: string) => void;
  setTodoText: (text: string) => void;
  handleAddTodo: () => void;
  setModalName: (name: string) => void;
  setModalEmoji: (emoji: string) => void;
  setModalType: (type: "List" | "Workspace") => void;
  handleSaveModal: () => void;
}

export const notesStoreData = create<AppStateProps>((set) => ({
  lists: [],
  workspaces: [],
  todos: [],
  todoText: "",
  editIndex: null,
  editText: "",
  dropdownIndex: null,
  isListModelOpen: false,
  isWorkspaceModalOpen: false,
  selectedList: "",
  selectedWorkspace: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,

  addList: (name, emoji) =>
    set((state) => ({ lists: [...state.lists, { name, emoji }] })),
  addWorkspace: (name, emoji) =>
    set((state) => ({ workspaces: [...state.workspaces, { name, emoji }] })),

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (index, updatedTodo) =>
    set((state) => {
      const newTodo = [...state.todos];
      newTodo[index] = updatedTodo;
      return {
        todos: newTodo,
        editIndex: null,
        editText: "",
      };
    }),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
      dropdownIndex: null,
    })),

  handleEdit: (index) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index].text,
      dropdownIndex: null,
    })),
  handleUpdate: (index) =>
    set((state) => {
      const updatedTodo = {
        ...state.todos[index],
        text: state.editText,
      };
      const newTodo = [...state.todos];
      newTodo[index] = updatedTodo;
      return {
        todos: newTodo,
        editIndex: null,
        editText: "",
      };
    }),
  handleDropdownClick: (index) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),
  setEditText: (text) => set({ editText: text }),
  setEditIndex: (index) => set({ editIndex: index }),
  openListModal: () => set({ isListModelOpen: true, modalType: "List" }),
  closeListModal: () =>
    set({ isListModelOpen: false, modalName: "", modalEmoji: "" }),
  openWorkspaceModal: () =>
    set({
      isWorkspaceModalOpen: true,
      modalType: "Workspace",
    }),
  closeWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: false, modalName: "", modalEmoji: "" }),
  setSelectedList: (list) => set({ selectedList: list }),
  setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
  setTodoText: (text) => set({ todoText: text }),

  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkspace } = state;

      if (todoText.trim() === "") {
        alert("todo connot be empty");
        return state;
      }
      const newTodo = {
        text: todoText,
        list: selectedList,
        workspace: selectedWorkspace,
      };
      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedText: "",
        selectedList: "",
        selectedWorkspace: "",
      };
    }),
  setModalName: (name) => set({ modalName: name }),
  setModalEmoji: (emoji) => set({ modalEmoji: emoji }),
  setModalType: (type) => set({ modalType: type }),

  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;
      if (modalName.trim() === "") return state;
      if (modalType === "List") {
        state.addList(modalName, modalEmoji);
      } else if (modalType === "Workspace") {
        state.addWorkspace(modalName, modalEmoji);
      }
      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModelOpen: false,
        isWorkspaceModalOpen: false,
      };
    }),
}));


