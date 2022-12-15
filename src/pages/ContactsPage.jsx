import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  selectContacts,
  selectfilteredArr,
} from 'redux/phoneBook/selectors.phoneBook';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/phoneBook/phonebook.thunk';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredArr = useSelector(selectfilteredArr);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => dispatch(deleteContact(id));
  const handleSubmit = (name, number, isOpenToWork) => {
    const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
      const newContact = { id: nanoid(), name, isOpenToWork, phone: number };
      dispatch(addContact(newContact));
    } else alert(`${name} is already in contact`);
  };

  const style = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '620px',
    paddingRight: '20px',
  };
  // ------------- two variants of redirect but we use Private/PublicRoute components
  // useEffect(() => {
  //   if (!isLogin) return;
  //   navigate("/contacts");
  // }, [isLogin,navigate]);

  // if (!isLoggetIn) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
      <div className="form-check" style={style}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={filteredArr} onClick={handleRemoveContact} />
      </div>
    </>
  );
};

// const CONTACTS_LOCAL_STORAGE = 'contactList';
// const contactLocalStorage = localStorage.getItem(CONTACTS_LOCAL_STORAGE);

// const [contacts, setContacts] = useState([]);
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));
// }, [contacts]);

// const handleAddContact = (name, number) => {
//   const isExist = contacts.find(user => user.name === name);
//   if (!isExist) {
//     setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
//   } else alert(`${name} is already in contact`);
// };

// const handleChange = e => dispatch(setFilter(e.target.value));
// const handleChange = e => setFilter(e.target.value);

// handleChange = e => {
//   const { name } = e.target;
//   this.setState({ [name]: e.target.value });
// };

// ------------тимчасово
// const handleRemoveContact = id => dispatch(removeContact(id));
// const handleRemoveContact = id =>
//   setContacts(contacts.filter(contact => contact.id !== id));
// ---------------------

// handleRemoveContact = id => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     };
//   });
// };
