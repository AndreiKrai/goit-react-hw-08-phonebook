import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage';
import Nav from './Nav/Nav';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/auth.thunk';
import { selectIsLoadingCurrentUser } from 'redux/auth/auth.selectors';
import Spiner from './Spiner/Spiner';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const isLoadingCurrentUser = useSelector(selectIsLoadingCurrentUser);

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return !isLoadingCurrentUser ? (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  ) : (
    <Spiner />
  );
}
