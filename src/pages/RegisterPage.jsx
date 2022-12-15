import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.thunk';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'email':
        setMail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setMail('');
    setName('');
    setPassword('');
  };

  const style = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '620px',
    paddingRight: '20px',
    paddingLeft: '30px',
    paddingTop: '20px',
  };

  // if (isLoggetIn) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <form action="" className="" style={style} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          className="form-control"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore
          d'Artagnan.
        </div>
      </div>
      {/* Email input. */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Email
        </label>
        <input
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleChange}
          value={email}
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          Email Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          provident ad excepturi delectus sapiente architecto est velit
        </div>
      </div>
      {/* Password input. */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          value={password}
          type="password"
          className="form-control"
          name="password"
          id="password"
          required
        />
        <div id="emailHelp" className="form-text">
          Password Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          dolore veniam dignissimos esse possimus
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
