import { useDispatch, useSelector } from 'react-redux'
import ContactList from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import {ContactForm} from './ContactForm/ContactForm';
import { addContact,removeContact, setFilter } from 'redux/Slice/PhoneBookSlice';
import { nanoid } from 'nanoid';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
export const App = () => {
  const CONTACTS_LOCAL_STORAGE = 'contactList';
  const contactLocalStorage = localStorage.getItem(CONTACTS_LOCAL_STORAGE);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const dispatch=useDispatch()   
  const contacts=useSelector(state=>state.contacts.contacts)  
  const filter=useSelector(state=>state.contacts.filter)  

// -------------LocalStorage--------------------

  // useEffect(() => {
  //   if (contactLocalStorage) {
  //     setContacts(JSON.parse(contactLocalStorage));
  //   }
  // }, []);


  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));
  // }, [contacts]);

  // console.log('contacts',contacts)
  // console.log('filter',filter)


const handleAddContact=(name, number)=>{
  console.log(contacts)
  const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
    const newContact = {name,number, id:nanoid()}
  dispatch(addContact(newContact))}
  else alert(`${name} is already in contact`);
}

  // const handleAddContact = (name, number) => {
  //   const isExist = contacts.find(user => user.name === name);
  //   if (!isExist) {
  //     setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
  //   } else alert(`${name} is already in contact`);
  // };

  const handleChange=e=>dispatch(setFilter(e.target.value))
  // const handleChange = e => setFilter(e.target.value);

  // handleChange = e => {
  //   const { name } = e.target;
  //   // console.log(name);
  //   this.setState({ [name]: e.target.value });
  // };

  // ------------тимчасово
  const handleRemoveContact = id =>dispatch(removeContact(id))
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

  const filteredArr = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
const style ={marginRight:"auto",marginLeft:"auto", width: "400px"};
  return (
    
    <div className='form-check' style={style}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onInput={handleChange} filter={filter} />
      <ContactList contacts={filteredArr} onBtnClick={handleRemoveContact} />
    </div>
  );
};
