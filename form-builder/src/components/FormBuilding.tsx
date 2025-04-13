import {ChangeEvent, useState} from "react";
import {useStore} from "../store/store";
import FormField from "./FormField";

interface FormUseForm {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "file" | "date";
    value: string;
}

const FormBuilding = () => {
    const {addField, formFields, removeField, updateField, resetForm} =
        useStore();
    const [newField, setNewField] = useState<FormUseForm>({
        label: "",
        type: "text",
        value: "",
    });
 
    const handleFieldChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setNewField((prev) => ({...prev, [name]: value}));
    };

    const handleAddField = () => {
        addField(newField);
        setNewField({label: "", type: "text", value: ""});
    };
    const handleResetForm = () => {
        resetForm();
        
    };

    const handleFieldUpdate = (index: number, updatedField: FormUseForm) => {
        updateField(index, updatedField);
    };

    const handleFieldRemove = (index: number) => {
        removeField(index);
    };
    return (
        <div
            className="max-w-lg mt-20 border border-gray-300 gap-2 rounded-2xl flex flex-col justify-center items-center mx-auto">
            <h2 className="text-center text-2xl font-semibold p-2 text-yellow-600">
                Form Building
            </h2>
            <div className=" w-[30rem] flex flex-col gap-2 m-3 p-3">
                <label htmlFor="label">Add Form</label>
                <input
                    className="w-full px-4 py-2 rounded-full outline-none border border-gray-300"
                    type="text"
                    name="label"
                    id="label"
                    value={newField.label}
                    
                />

                <select
                    className="px-4 py-2 border border-gray-300 rounded-full"
                    name="type"
                    id="type"
                    title="type"
                    value={newField.type}
                    onChange={handleFieldChange}
                >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="password">Password</option>
                    <option value="textarea">Textarea</option>
                    <option value="file">file</option>
                    <option value="date">Date</option>
                </select>

                <div className="flex justify-between gap-2 m-2">
                    <button
                        type="button"
                        onChange={handleAddField}
                        className="px-4 py-2 bg-amber-600 text-white rounded-2xl hover:bg-amber-500"
                    >
                        Add Field
                    </button>
                    <button
                        type="button"
                        onChange={handleResetForm}
                        className="px-4 py-2 bg-red-600 text-white rounded-2xl hover:bg-red-500"
                    >
                        Reset Form
                    </button>
                </div>
            </div>
            <form>
                {formFields.map((field, index) => (
                    <FormField
                        key={index}
                        field={field}
                        onUpdate={handleFieldUpdate}
                        onRemove={handleFieldRemove}
                    />
                ))}
            </form>
        </div>
    );
};
export default FormBuilding;
