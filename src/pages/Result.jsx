import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../component/Analysis';
import Summary from '../component/Summary';
import Error from '../component/UI/Error';
import useAnswers from '../hooks/useAnswers';

export default function Result() {
    const { id } = useParams();
    const location = useLocation();
    const { state: qna } = location;
    const { loading, error, answers } = useAnswers(id);
    const calculate = () =>
        answers.reduce(
            (acc, cur, index1) => {
                const correctIndexes = [];
                const checkedIndexes = [];
                cur.options.forEach((opt, index2) => {
                    if (opt.correct) {
                        correctIndexes.push(index2);
                        acc.qna[index1].options[index2].correct = opt.correct;
                    }
                    if (acc.qna[index1]?.options[index2].checked) {
                        checkedIndexes.push(index2);
                    }
                });
                if (_.isEqual(correctIndexes, checkedIndexes)) {
                    acc.score += 5;
                }
                return acc;
            },
            { qna, score: 0 }
        );
    const { qna: analysisAnswers, score } = calculate();
    let content = null;
    if (loading && !error) {
        content = <div>Loading ...</div>;
    } else if (!loading && error) {
        content = <Error text="Something was wrong" />;
    } else if (!loading && !error && answers.length > 0) {
        console.log(answers);
        content = (
            <>
                <Summary score={score} noq={analysisAnswers.length} />
                <Analysis score={score} answers={analysisAnswers} />
            </>
        );
    }
    return content;
}
