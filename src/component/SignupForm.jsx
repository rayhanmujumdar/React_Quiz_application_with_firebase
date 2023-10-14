import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import Info from './Info';
import TextInput from './TextInput';
import Error from './UI/Error';

export default function SignupForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser } = useAuth();
    const { signup } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const path = location?.state?.pathname || '/';

    // redirect
    useEffect(() => {
        if (currentUser?.uid) {
            navigate(path, { replace: true });
        }
    }, [currentUser, navigate, path]);

    // signup handle function
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
    return (
        <Form style={{ height: '500px' }} onSubmit={handleSignupForm}>
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
    );
}
