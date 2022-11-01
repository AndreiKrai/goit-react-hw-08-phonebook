import React, { Component } from 'react'

export default class ContactForm extends Component {
    
  render() {
    const {onBtnClick,onInput, name, number}=this.props
    return (
        <form action="" className="w-50">
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={onInput}
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
            onChange={onInput}
            value={number}
            type="tel"
            className="form-control"
            name="number"
            id="phone"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
          Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
          </div>
        </div>
        
        <button
          onClick={onBtnClick}
          type="button"
          className="btn btn-primary"
        >
          Add contact
        </button>
      </form>
    )
  }
}
