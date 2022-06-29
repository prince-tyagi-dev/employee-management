import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const RequireAuth = ({ allowRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user?.roles?.find((role) => allowRoles.include(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
