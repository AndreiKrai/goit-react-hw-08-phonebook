import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggetIn } from 'redux/auth/auth.selectors';

// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLoggetIn = useSelector(selectIsLoggetIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggetIn ? children : <Navigate to="/login"  />}
//     </Route>
//   );
// }

export const PrivateRoute = () => {
  const IsLoggetIn = useSelector(selectIsLoggetIn);
  return IsLoggetIn ? <Outlet /> : <Navigate to="/login" />;
};
