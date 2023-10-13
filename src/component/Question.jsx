import Classes from '../styles/Question.module.css';
import QuestionTitle from './QuestionTitle';
import ResultOption from './ResultOption';

export default function Question() {
    return (
        <div className={Classes.question}>
            <QuestionTitle />
            <div className={Classes.answers}>
                <ResultOption text="A new hope 1" />
                <ResultOption text="A new hope 2" />
                <ResultOption text="A new hope 3" />
                <ResultOption text="A new hope 4" />
                <ResultOption text="A new hope 5" />
                <ResultOption text="A new hope 6" />
                <ResultOption text="A new hope 7" />
                <ResultOption text="A new hope 8" />
                <ResultOption text="A new hope 9" />
                <ResultOption text="A new hope 10" />
            </div>
        </div>
    );
}
