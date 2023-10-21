import Question from './Question';

export default function Analysis({ score, answers }) {
    return (
        <div className="analysis">
            <h1>Question Analysis</h1>
            <h4>
                You answerd {score} out of {answers.length * 5} questions correctly
            </h4>
            <Question answers={answers} />
        </div>
    );
}
