import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLoggetIn } from 'redux/auth/auth.selectors';

// export default function PublicRoute({
//   children,
//   restricted = false,
//   ...props
// }) {
//   const isLoggetIn = useSelector(selectIsLoggetIn);
//   const shouldRedirect = isLoggetIn && restricted;
//   return (
//     <Route {...props}>{shouldRedirect ? <Navigate to="/" /> : children}</Route>
//   );
// }

export const PublicRoute = () => {
  const location = useLocation();
  const IsLoggetIn = useSelector(selectIsLoggetIn);
  return IsLoggetIn ? (
    <Navigate
      to={location.state?.login ?? '/contacts'}
      state={location.state}
    />
  ) : (
    <Outlet />
  );
};
