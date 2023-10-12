import miniPlayerImage from '../assets/images/3.jpg';
import Classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer() {
    return (
        <div className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}>
            <ion-icon name="close-outline" class={Classes.close} />
            <ion-icon name="play-circle-outline" class={Classes.open} />
            <img src={miniPlayerImage} alt="thumbnail" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}
