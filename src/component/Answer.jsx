import Classes from '../styles/Answer.module.css';
import Option from './Option';

export default function Answer() {
    return (
        <div className={Classes.answers}>
            <Option text="A new hope 1" htmlFor="option1" />
            <Option text="A new hope 2" htmlFor="option2" />
            <Option text="A new hope 3" htmlFor="option3" />
            <Option text="A new hope 4" htmlFor="option4" />
            <Option text="A new hope 5" htmlFor="option5" />
            <Option text="A new hope 6" htmlFor="option6" />
            <Option text="A new hope 7" htmlFor="option7" />
            <Option text="A new hope 8" htmlFor="option8" />
            <Option text="A new hope 9" htmlFor="option9" />
            <Option text="A new hope 10" htmlFor="option10" />
        </div>
    );
}
