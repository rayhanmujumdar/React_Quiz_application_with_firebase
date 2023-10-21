import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer({ videoId }) {
    const [player, setPlayer] = useState(false);
    const { state } = useLocation();
    return (
        <div className={`${Classes.miniPlayer} ${!player && Classes.floatingBtn}`}>
            <ion-icon onClick={() => setPlayer(false)} name="close-outline" class={Classes.close} />
            <ion-icon
                onClick={() => setPlayer(true)}
                name="play-circle-outline"
                class={Classes.open}
            />
            {player && (
                <iframe
                    width="200px"
                    height="168px"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
            <p>{state?.title}</p>
        </div>
    );
}
