import { useState } from 'react';
import { Link } from 'react-router-dom';
import singupImage from '../assets/images/signup.svg';
import Button from '../component/Button';
import Checkbox from '../component/Checkbox';
import Form from '../component/Form';
import Illustration from '../component/Illustration';
import Info from '../component/Info';
import TextInput from '../component/TextInput';
import Error from '../component/UI/Error';
import { useAuth } from '../contexts/authContext';

export default function Signup() {
    const { signup, currentUser } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleSignupForm = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password does not match');
        } else {
            setError('');
            signup({
                username,
                email,
                password,
            });
        }
    };
    console.log(currentUser);
    return (
        <>
            <h1>Create an account</h1>
            <div className="colum">
                <Illustration src={singupImage} alt="Signup image" />
                <Form onSubmit={handleSignupForm} className="signup">
                    <TextInput
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter name"
                    >
                        <ion-icon name="person-outline" />
                    </TextInput>
                    <TextInput
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                    >
                        <ion-icon name="at-outline" />
                    </TextInput>
                    <TextInput
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter password"
                    >
                        <ion-icon name="lock-closed-outline" />
                    </TextInput>
                    <TextInput
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm password"
                    >
                        <ion-icon name="lock-closed-outline" />
                    </TextInput>
                    {error && <Error text={error} />}
                    <Checkbox required text="I agree to the Terms & Conditions" />
                    <Button type="submit">submit now</Button>
                    <Info>
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </Info>
                </Form>
            </div>
        </>
    );
}
