import Classes from '../styles/QuestionTitle.module.css';

export default function QuestionTitle({ title }) {
    return (
        <div className={Classes.qtitle}>
            <ion-icon name="help-circle-outline" class={Classes.qicon} />
            <p>{title}</p>
        </div>
    );
}
