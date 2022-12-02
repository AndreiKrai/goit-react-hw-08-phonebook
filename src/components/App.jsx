import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { addContact, deleteContact, fetchContacts } from 'redux/thunk';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts, selectFilter, selectfilteredArr, selectIsOpenToWork } from 'redux/selectors.phoneBook';


export const App = () => {


  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isOpenToWork = useSelector(selectIsOpenToWork);
  // селектори будуть перерендувати едементи, бо useSelector перевіряє попередній та поточні данні === ,а масиви та о'бєкти так будуть завжди false тому їх треба кешувати
  const filteredArr = useSelector(selectfilteredArr);

  


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => dispatch(deleteContact(id));
  const handleSubmit = (name,number,isOpenToWork) => {
    
    const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
      const newContact = {id: nanoid(),name ,isOpenToWork,phone:number};
      dispatch(addContact(newContact));
    } else alert(`${name} is already in contact`);
    
  };

  // const filteredArr = contacts => {
  //   // цю функцію бажано перенести в файл із селекторами і повернути сюди тільки як селектор. тоді і селектори з- 14-17строки не будуть потрібні в цьому файлі
  //   const nameFilter = contacts.filter(user =>
  //     user.name.toLowerCase().includes(filter.toLowerCase())
  //   );   
  //   if(isOpenToWork === "notSelected"){
  //     return nameFilter}
  //   else{
  //   const statusFilter= nameFilter.filter(user=>user.isOpenToWork===isOpenToWork)
  //   return statusFilter}

  // };
  const style = { marginRight: 'auto', marginLeft: 'auto', width: '620px' };
  return (
    <div className="form-check" style={style}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredArr} onClick={handleRemoveContact} />
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