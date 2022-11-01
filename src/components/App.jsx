import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  };
  handleChange = e => {
   
   const{name}=e.target
   console.log(name)
    this.setState({ [name]: e.target.value });
  };

  handleAddContact = () => {
    const {name,contacts} = this.state;
const isExist =this.state.contacts.find(user=>user.name === name)
if(!isExist){
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      };
    });
  }
  else   alert(`${name} is already in contact`)

  };

  handleRemoveContact = id => {console.log(id)
    this.setState (prevState=> {return {contacts:prevState.contacts.filter(contact=>contact.id!== id)}})}
  // return інколи дужки далі інколи ні,чого?

  render() {
    const { name,contacts,number,filter } = this.state;
    // name!!!===================
    let filteredArr= contacts.filter(user=>user.name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onBtnClick={this.handleAddContact} onInput={this.handleChange} name={name} number={number}/>
        <h2>Contacts</h2>
        <Filter onInput={this.handleChange} filter={filter}/> 
        <ContactList contacts={filteredArr} onBtnClick={this.handleRemoveContact} />
      </div>
    );
  }
}

