import Classes from '../styles/TextInput.module.css';

export default function TextInput({ children, ...props }) {
    return (
        <div className={Classes.textInput}>
            <input {...props} />
            <div className={Classes.icon}>{children}</div>
        </div>
    );
}
