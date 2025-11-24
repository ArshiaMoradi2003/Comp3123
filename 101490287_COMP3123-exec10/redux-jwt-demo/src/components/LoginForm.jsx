// src/components/LoginForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter email and password');
            return;
        }

        // Fake JWT token for demo purposes
        const fakeToken = 'fake.jwt.token.for-demo-only';

        dispatch(
            loginSuccess({
                token: fakeToken,
                user: { email },
            })
        );

        setError('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '1rem auto' }}>
            <h2>Login (JWT Demo)</h2>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%' }}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" style={{ marginTop: '1rem' }}>
                Login
            </button>
        </form>
    );
}

export default LoginForm;
