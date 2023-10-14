import VideoClasses from '../styles/Video.module.css';

export default function Video({ video }) {
    const { noq, title, youtubeID } = video;
    return (
        <div className={VideoClasses.card}>
            <div className={VideoClasses.cardHeader}>
                <img
                    src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
                    alt="THUMBNAIL"
                />
            </div>
            <div className={VideoClasses.cardBody}>
                <p>{title}</p>
            </div>
            <div className={VideoClasses.cardFooter}>
                <span>{noq} Questions</span>
                <span>Score : {noq !== 0 ? noq * 5 : 'Not taken yet'}</span>
            </div>
        </div>
    );
}
