import { useState } from 'react';
import Classes from '../styles/ProgressBar.module.css';
import Button from './Button';
import Tooltip from './Tooltip';

export default function ProgressBar({ prev, next, progress, submit }) {
    const [tooltip, setTooltip] = useState(false);
    return (
        <div className={Classes.progressBar}>
            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <div role="button" onClick={prev} className={Classes.backbutton}>
                <ion-icon name="arrow-back-outline" />
            </div>
            <div className={Classes.rangeArea}>
                <div className="range-body">
                    <div
                        style={{ width: `${progress}%` }}
                        onMouseOver={() => setTooltip(true)}
                        onMouseOut={() => setTooltip(false)}
                        onFocus={() => setTooltip(true)}
                        onBlur={() => setTooltip(false)}
                        className={Classes.progress}
                    >
                        {tooltip && <Tooltip text={`${progress}% completed`} />}
                    </div>
                </div>
            </div>
            <Button onClick={progress === 100 ? submit : next} className={Classes.next}>
                <span>{progress === 100 ? 'Submit' : ' Next Question'}</span>
                <ion-icon name="arrow-forward-outline" />
            </Button>
        </div>
    );
}
