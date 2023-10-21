import { child, getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Answer from '../component/Answer';
import MiniPlayer from '../component/MiniPlayer';
import ProgressBar from '../component/ProgressBar';
import Error from '../component/UI/Error';
import { useAuth } from '../contexts/authContext';
import useQuestions from '../hooks/useQuestions';

const initialValue = null;
function reducer(state, action) {
    const questionClone = _.cloneDeep(action.value);
    switch (action.type) {
        case 'questions':
            questionClone.forEach((opt) => {
                opt.options.forEach((val) => {
                    // eslint-disable-next-line no-param-reassign
                    val.checked = false;
                });
            });
            return questionClone;
        case 'answer':
            // eslint-disable-next-line no-param-reassign
            state[action.questionID].options[action.optionID].checked = action.value;
            return [...state];
        default:
            return state;
    }
}

export default function Quiz() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQna, setCurrentQna] = useState(0);
    const [qna, dispatch] = useReducer(reducer, initialValue);
    // for copy all qna to questions and set check option all questions
    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions,
        });
    }, [questions]);
    const handleChange = (e, optionID) => {
        e.preventDefault();
        dispatch({
            type: 'answer',
            optionID,
            value: e.target.checked,
            questionID: currentQna,
        });
    };

    // prev question and next question handler
    const prevQuestionHandler = () => {
        if (currentQna < qna.length && currentQna >= 1) {
            setCurrentQna((prevCurrent) => prevCurrent - 1);
        }
    };
    const nextQuestionHandler = () => {
        if (qna[currentQna].options.some((opt) => opt.checked)) {
            if (currentQna >= 0 && currentQna < qna.length - 1) {
                setCurrentQna((prevCurrent) => prevCurrent + 1);
            }
        } else {
            // eslint-disable-next-line no-alert
            alert('please select your answer');
        }
    };
    // progress bar parentage
    const parentage = qna?.length > 0 && ((currentQna + 1) / qna.length) * 100;
    // question submit handler
    const resultSubmitHandler = async () => {
        if (qna[currentQna].options.some((opt) => opt.checked)) {
            if (currentUser?.uid) {
                console.log(currentUser.uid);
                const db = getDatabase();
                const resultRef = ref(db, `/result/${currentUser.uid}`);
                const childQna = child(resultRef, `${id}`);
                try {
                    await set(childQna, {
                        ...qna,
                    });
                    navigate(`/result/${id}`, {
                        state: qna,
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            // eslint-disable-next-line no-alert
            alert('please select your answer');
        }
    };
    let content = null;
    if (loading && !error) {
        content = <div>loading ...</div>;
    } else if (!loading && error) {
        content = <Error text="Something went wrong" />;
    } else if (!loading && !error && questions.length === 0) {
        content = <Error text="Qna Not Found" />;
    } else {
        content = (
            <>
                <h1>{questions[currentQna]?.title}</h1>
                <h4>Question can have multiple answers</h4>
                {qna[currentQna]?.options.length > 0 && (
                    <Answer input options={qna[currentQna]?.options} handleChecked={handleChange} />
                )}
                <ProgressBar
                    progress={parentage}
                    prev={prevQuestionHandler}
                    next={nextQuestionHandler}
                    submit={resultSubmitHandler}
                />
                <MiniPlayer videoId={id} />
            </>
        );
    }
    return content;
}
