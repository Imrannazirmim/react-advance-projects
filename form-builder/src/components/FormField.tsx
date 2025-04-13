interface FormFieldProps {
    field: {
        label: string;
        type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
        value: string;
    }
    index: number;
    onUpdate: (
        index: number,
        onRemove: {
            label: string,
            type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file',
            value: string;
        }
    ) => void;
    onRemove: (index: number) => void;
}


const FormField = ({field, onUpdate, onRemove, index}: FormFieldProps) => {

    return <div>
       <label >{field.label}</label>
    </div>;
};

export default FormField;
