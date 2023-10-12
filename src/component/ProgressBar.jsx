import Classes from '../styles/ProgressBar.module.css';
import Button from './Button';
import Tooltip from './Tooltip';

export default function ProgressBar() {
    return (
        <div className={Classes.progressBar}>
            <div className={Classes.backbutton}>
                <ion-icon name="arrow-back-outline" />
            </div>
            <div className={Classes.rangeArea}>
                <Tooltip text="25% completed" />
                <div className="range-body">
                    <div className={Classes.progress} />
                </div>
            </div>
            <a href="result.html">
                <Button className={Classes.next}>
                    <span>Next Question</span>
                    <ion-icon name="arrow-forward-outline" />
                </Button>
            </a>
        </div>
    );
}
