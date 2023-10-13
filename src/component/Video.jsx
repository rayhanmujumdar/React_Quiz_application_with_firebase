import { Link } from 'react-router-dom';
import thumbnail from '../assets/images/3.jpg';
import VideoClasses from '../styles/Video.module.css';

export default function Video() {
    return (
        <Link to="/quiz">
            <div className={VideoClasses.card}>
                <div className={VideoClasses.cardHeader}>
                    <img src={thumbnail} alt="THUMBNAIL" />
                </div>
                <div className={VideoClasses.cardBody}>
                    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                </div>
                <div className={VideoClasses.cardFooter}>
                    <span>10 Questions</span>
                    <span>Score : Not taken yet</span>
                </div>
            </div>
        </Link>
    );
}
