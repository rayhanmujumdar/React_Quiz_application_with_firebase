import { useMemo } from 'react';
import summeryImage from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import Classes from '../styles/Summary.module.css';
import Error from './UI/Error';

export default function Summary({ score, noq }) {
    const grade = useMemo(() => {
        const parentage = (score / (noq * 5)) * 100;
        if (parentage < 50) {
            return 'bad';
        }
        if (parentage >= 50 && parentage < 75) {
            return 'excellent';
        }
        if (parentage >= 75 && parentage < 90) {
            return 'good';
        }
        return 'very good';
    }, [score, noq]);
    const { data, loading, error } = useFetch({
        url: `https://api.pexels.com/v1/search?query=${grade}&per_page=1`,
        method: 'GET',
        headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
    });
    let content = null;
    if (loading && !error) {
        content = (
            <div className={Classes.badge}>
                <span>Image Loading ...</span>
            </div>
        );
    } else if (!loading && error) {
        content = (
            <div className={Classes.badge}>
                <Error text="Something was wrong" />
            </div>
        );
    } else if (!loading && !error && data) {
        const image = data.photos[0].src.medium;
        content = (
            <div className={Classes.badge}>
                <img src={image || summeryImage} alt="summary img" />
            </div>
        );
    }
    return (
        <div className={Classes.summery}>
            <div className={Classes.point}>
                <p className={Classes.score}>
                    Your score is
                    <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {content}
        </div>
    );
}
