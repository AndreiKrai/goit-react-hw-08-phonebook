import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/thunk';

export const ContactForm = ({ onSubmit }) => {
  // state = { number: '', name: '' };
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const contacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'number':
        setNumber(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
      const newContact = {id: nanoid(),name ,phone:number};
      // console.log(newContact)
      dispatch(addContact(newContact));
    } else alert(`${name} is already in contact`);
    setNumber('');
    setName('');
  };


  // handleChange  = e => {
  //   const{name}=e.target
  //   console.log(name)
  //    setState({ [name]: e.target.value });
  // };

  return (
    <form action="" className="" onSubmit={handleSubmit}>
      {/* ставимо на форму onSubmit={this.handleSubmit} а на батон не вішаємо по */}
      {/* Name input */}
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
      {/* Phone input */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleChange}
          value={number}
          type="tel"
          className="form-control"
          name="number"
          id="phone"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +
        </div>
      </div>
{/* isOpenToWork */}
<div class="form-check form-switch" style={{marginBottom:"10px"}}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
  <label class="form-check-label" for="flexSwitchCheckChecked">isOpenToWork</label>
</div>

      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propType = { onSubmit: PropTypes.func.isRequired };
