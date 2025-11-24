// src/components/Navbar.jsx
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

function Navbar() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    return (
        <nav style={{ padding: '0.5rem 1rem', background: '#eee' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>
                Home
            </Link>
            <Link to="/counter" style={{ marginRight: '1rem' }}>
                Counter
            </Link>
            {isLoggedIn ? (
                <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
                <span>Not logged in</span>
            )}
        </nav>
    );
}

export default Navbar;
