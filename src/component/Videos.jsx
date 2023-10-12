import videosClasses from '../styles/Videos.module.css';
import Video from './Video';

export default function Videos() {
    return (
        <div className={videosClasses.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}
