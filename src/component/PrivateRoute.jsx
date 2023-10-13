import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

export default function PrivateRoute() {
    const location = useLocation();
    const { currentUser } = useAuth();
    return currentUser?.uid ? <Outlet /> : <Navigate to="/login" replace state={{ ...location }} />;
}
