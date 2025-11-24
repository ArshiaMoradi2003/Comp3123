// src/components/ProtectedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);

    if (!isLoggedIn || !token) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
