import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

const CONTACTS_LOCAL_STORAGE = 'contactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactLocalStorage = localStorage.getItem(CONTACTS_LOCAL_STORAGE);
    if (contactLocalStorage) {
      this.setState({ contacts: JSON.parse(contactLocalStorage) });
    } else return;
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
    localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));}
  }

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    // або contacts або name они лежать на різних вкладеностях!!!
    const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name, number: number },
          ],
        };
      });
    } else alert(`${name} is already in contact`);
  };
  handleChange = e => {
    const { name } = e.target;
    console.log(name);
    this.setState({ [name]: e.target.value });
  };

  handleRemoveContact = id => {
    console.log(id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  // return інколи дужки далі інколи ні,чого?

  render() {
    const { contacts, filter } = this.state;
    // name!!!===================
    let filteredArr = contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onInput={this.handleChange} filter={filter} />
        <ContactList
          contacts={filteredArr}
          onBtnClick={this.handleRemoveContact}
        />
      </div>
    );
  }
}
