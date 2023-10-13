import Classes from '../styles/QuestionTitle.module.css';

export default function QuestionTitle() {
    return (
        <div className={Classes.qtitle}>
            <ion-icon name="help-circle-outline" class={Classes.qicon} />
            <p>Here goes the question from Learn with Sumit?</p>
        </div>
    );
}
