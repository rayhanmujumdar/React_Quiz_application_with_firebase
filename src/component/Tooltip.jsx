import Classes from '../styles/Tooltip.module.css';

export default function Tooltip({ text }) {
    return (
        <div className={Classes.tooltip}>
            <span>{text}</span>
        </div>
    );
}
