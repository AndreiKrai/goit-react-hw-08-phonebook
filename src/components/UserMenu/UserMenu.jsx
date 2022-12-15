import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth.selectors';
import { logoutThunk } from 'redux/auth/auth.thunk';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className="d-flex align-items-center ms-auto">
      <p className="d-contents mr-2">Welcome {name} </p>
      <button
        type="button"
        className="btn btn-light btn-sm "
        onClick={handleLogout}
      >
        Logout
      </button>

      {/* <p>Welcome</p>
      <button type="button" class="btn btn-light">
        Logout
      </button> */}
    </div>
  );
}
