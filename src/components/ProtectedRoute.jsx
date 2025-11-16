// src/components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ isLoggedIn, children, redirectTo = '/login' }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  // Soporta ambos patrones: con children o con <Outlet />
  return children ?? <Outlet />;
}

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  children: undefined,
  redirectTo: '/login',
};
