import NavMenu from 'components/NavMenu/NavMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggetIn } from 'redux/auth/auth.selectors';

export default function Nav() {
  const isLoggetInUser = useSelector(selectIsLoggetIn);

  const style = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '620px',
    paddingLeft: '30px',
    paddingRight: '30px',
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={style}
    >
      <Link className="navbar-brand" to="/register">
        PhoneBook
      </Link>
      {isLoggetInUser ? <UserMenu /> : <NavMenu />}
    </nav>
  );
}
