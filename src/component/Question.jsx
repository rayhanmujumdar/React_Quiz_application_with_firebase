import Classes from '../styles/Question.module.css';
import Answer from './Answer';
import QuestionTitle from './QuestionTitle';

export default function Question({ answers }) {
    return answers.map((answer) => (
        <div key={Math.random()} className={Classes.question}>
            <QuestionTitle title={answer.title} />
            <Answer input={false} options={answer.options} />
        </div>
    ));
}
