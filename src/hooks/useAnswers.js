import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        const fetchAnswers = async () => {
            const db = getDatabase();
            const answerRef = ref(db, `answers/${videoID}/questions`);
            const answerQuery = query(answerRef, orderByKey());
            try {
                const snapshot = await get(answerQuery);
                if (snapshot.exists()) {
                    setLoading(false);
                    setAnswers((prevAnswers) => [...prevAnswers, ...Object.values(snapshot.val())]);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        };
        fetchAnswers();
    }, [videoID]);
    return {
        loading,
        error,
        answers,
    };
}
