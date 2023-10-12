import Answer from '../component/Answer';
import MiniPlayer from '../component/MiniPlayer';
import ProgressBar from '../component/ProgressBar';

export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answer />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
}
