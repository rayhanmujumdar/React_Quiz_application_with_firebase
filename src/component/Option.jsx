import Classes from '../styles/Option.module.css';

export default function Option({ text, htmlFor, ...props }) {
    return (
        <label htmlFor={htmlFor} className={Classes.answer}>
            <input type="checkbox" id={htmlFor} {...props} />
            <span>{text}</span>
        </label>
    );
}
