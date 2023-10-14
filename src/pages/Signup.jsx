import singupImage from '../assets/images/signup.svg';
import Illustration from '../component/Illustration';
import SignupForm from '../component/SignupForm';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="colum">
                <Illustration src={singupImage} alt="Signup image" />
                <SignupForm />
            </div>
        </>
    );
}
