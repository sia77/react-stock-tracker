import { useAuth } from '@/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import StatusMessage from './StatusMessage';


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const {isAuthenticated, isLoading } = useAuth();

  console.log("isAuthenticated: ", isAuthenticated);

  if (isLoading) {
    return <StatusMessage loading={isLoading} />;
}

  if (!isAuthenticated) {
    // Redirect to 404 or some fallback route
    return <Navigate to="/404" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;