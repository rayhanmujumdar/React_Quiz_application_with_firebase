import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Button from './Button';
import Form from './Form';
import Info from './Info';
import TextInput from './TextInput';
import Error from './UI/Error';

export default function LoginForm() {
    const { currentUser, login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            await login({ email, password });
        } catch (err) {
            setError(err.code);
        }
    };
    const path = location.state?.pathname || '/';
    useEffect(() => {
        if (currentUser?.uid) {
            navigate(path, { replace: true });
        }
    }, [path, currentUser.uid, navigate]);
    return (
        <Form onSubmit={handleLogin} style={{ height: '330px' }}>
            <TextInput
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
            >
                <ion-icon name="at-outline" />
            </TextInput>
            <TextInput
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
            >
                <ion-icon name="lock-closed-outline" />
            </TextInput>
            {error && <Error text={error} />}
            <Button type="submit">Login</Button>
            <Info>
                Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
            </Info>
        </Form>
    );
}
