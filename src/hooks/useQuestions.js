import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuiz = async () => {
            const db = getDatabase();
            const quizRef = ref(db, `/quiz/${videoID}/questions`);
            const quizQuery = query(quizRef, orderByKey());
            try {
                const snapshot = await get(quizQuery);
                if (snapshot.exists()) {
                    setError(false);
                    setLoading(false);
                    setQuestions((prevQuestions) => [
                        ...prevQuestions,
                        ...Object.values(snapshot.val()),
                    ]);
                }
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        };
        fetchQuiz();
    }, [videoID]);
    return {
        loading,
        error,
        questions,
    };
}
