import Classes from '../styles/Option.module.css';

export default function Option({ text, id, ...props }) {
    return (
        <label htmlFor={id} className={Classes.answer}>
            <input {...props} type="checkbox" id={id} />
            <span>{text}</span>
        </label>
    );
}
