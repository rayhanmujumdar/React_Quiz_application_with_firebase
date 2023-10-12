import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import Info from '../Info';
import TextInput from '../TextInput';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="colum">
                <Illustration />
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
                        <p>
                            Already have an account? <a href="login.html">Login</a> instead.
                        </p>
                    </Info>
                </Form>
            </div>
        </>
    );
}
