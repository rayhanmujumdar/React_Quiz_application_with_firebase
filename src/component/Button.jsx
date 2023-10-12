import Classes from '../styles/Button.module.css';

export default function Button({ children, className, ...props }) {
    return (
        <button {...props} className={`${Classes.button} ${className}`}>
            {children}
        </button>
    );
}
