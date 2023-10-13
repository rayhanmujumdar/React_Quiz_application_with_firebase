import successImage from '../assets/images/success.png';
import Classes from '../styles/Summary.module.css';

export default function Summary() {
    return (
        <div className={Classes.summery}>
            <div className={Classes.point}>
                <p className={Classes.score}>
                    Your score is
                    <br />5 out of 10
                </p>
            </div>
            <div className={Classes.badge}>
                <img src={successImage} alt="success img" />
            </div>
        </div>
    );
}
