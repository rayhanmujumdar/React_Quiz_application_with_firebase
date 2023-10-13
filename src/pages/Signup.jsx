import { Link } from 'react-router-dom';
import singupImage from '../assets/images/signup.svg';
import Button from '../component/Button';
import Checkbox from '../component/Checkbox';
import Form from '../component/Form';
import Illustration from '../component/Illustration';
import Info from '../component/Info';
import TextInput from '../component/TextInput';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="colum">
                <Illustration src={singupImage} alt="Signup image" />
                <Form className="signup">
                    <TextInput type="text" placeholder="Enter name">
                        <ion-icon name="person-outline" />
                    </TextInput>
                    <TextInput type="email" placeholder="Enter email">
                        <ion-icon name="at-outline" />
                    </TextInput>
                    <TextInput type="password" placeholder="Enter password">
                        <ion-icon name="lock-closed-outline" />
                    </TextInput>
                    <TextInput type="password" placeholder="Confirm password">
                        <ion-icon name="lock-closed-outline" />
                    </TextInput>
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button type="submit">submit now</Button>
                    <Info>
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </Info>
                </Form>
            </div>
        </>
    );
}
