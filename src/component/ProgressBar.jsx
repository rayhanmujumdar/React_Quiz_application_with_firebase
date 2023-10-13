import { useState } from 'react';
import { Link } from 'react-router-dom';
import Classes from '../styles/ProgressBar.module.css';
import Button from './Button';
import Tooltip from './Tooltip';

export default function ProgressBar() {
    const [tooltip, setTooltip] = useState(false);
    return (
        <div className={Classes.progressBar}>
            <div className={Classes.backbutton}>
                <ion-icon name="arrow-back-outline" />
            </div>
            <div className={Classes.rangeArea}>
                <div className="range-body">
                    <div
                        onMouseOver={() => setTooltip(true)}
                        onMouseOut={() => setTooltip(false)}
                        onFocus={() => setTooltip(true)}
                        onBlur={() => setTooltip(false)}
                        className={Classes.progress}
                    >
                        {tooltip && <Tooltip text="25% completed" />}
                    </div>
                </div>
            </div>
            <Link to="/result">
                <Button className={Classes.next}>
                    <span>Next Question</span>
                    <ion-icon name="arrow-forward-outline" />
                </Button>
            </Link>
        </div>
    );
}
