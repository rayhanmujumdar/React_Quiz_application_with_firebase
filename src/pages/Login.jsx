import loginImage from '../assets/images/login.svg';

import Illustration from '../component/Illustration';
import LoginForm from '../component/LoginForm';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="colum">
                <Illustration src={loginImage} alt="login image" />
                <LoginForm />
            </div>
        </>
    );
}
