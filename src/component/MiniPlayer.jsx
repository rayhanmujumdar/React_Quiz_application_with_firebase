import { useState } from 'react';
import miniPlayerImage from '../assets/images/3.jpg';
import Classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer() {
    const [player, setPlayer] = useState(false);
    return (
        <div className={`${Classes.miniPlayer} ${!player && Classes.floatingBtn}`}>
            <ion-icon onClick={() => setPlayer(false)} name="close-outline" class={Classes.close} />
            <ion-icon
                onClick={() => setPlayer(true)}
                name="play-circle-outline"
                class={Classes.open}
            />
            <img src={miniPlayerImage} alt="thumbnail" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}
