import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { fetchContacts } from 'redux/thunk';
import { useEffect } from 'react';
import Pagination from './Pagination/Pagination';

export const App = () => {


  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isOpenToWork = useSelector(state => state.contacts.isOpenToWork);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredArr = contacts => {
    const nameFilter = contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    const statusFilter= nameFilter.filter(user=>user.isOpenToWork===isOpenToWork)
    return statusFilter

  };
  const style = { marginRight: 'auto', marginLeft: 'auto', width: '620px' };
  return (
    <div className="form-check" style={style}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredArr(contacts)} />
      {/* <Pagination/> */}
    </div>
  );
};



  // const CONTACTS_LOCAL_STORAGE = 'contactList';
  // const contactLocalStorage = localStorage.getItem(CONTACTS_LOCAL_STORAGE);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));
  // }, [contacts]);

  // console.log('contacts',contacts)
  // console.log('filter',filter)

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
  //   // console.log(name);
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