import loginImage from '../assets/images/login.svg';
import Button from '../component/Button';
import Form from '../component/Form';
import Illustration from '../component/Illustration';
import Info from '../component/Info';
import TextInput from '../component/TextInput';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="colum">
                <Illustration src={loginImage} alt="login image" />
                <Form className="login">
                    <TextInput type="email" placeholder="Enter email">
                        <ion-icon name="at-outline" />
                    </TextInput>
                    <TextInput type="password" placeholder="Enter password">
                        <ion-icon name="lock-closed-outline" />
                    </TextInput>
                    <Button type="submit">Login</Button>
                    <Info>
                        Don&apos;t have an account? <a href="/signup.html">Signup</a> instead.
                    </Info>
                </Form>
            </div>
        </>
    );
}
