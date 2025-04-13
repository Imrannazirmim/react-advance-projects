import { create } from "zustand/react";

interface FormField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "file" | "date";
  value: string;
}

interface FormFieldProps {
  formFields: FormField[];
  addField: (field: FormField) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormField) => void;
  resetForm: () => void;
}

export const useStore = create<FormFieldProps>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),
  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updatedField : field
      ),
    })),
  resetForm: () => set({ formFields: [] }),
}));
