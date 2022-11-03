import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ContactForm extends Component {
  state = { number: '', name: '' };

  handleSubmit = (e) => {e.preventDefault();
    this.props.onSubmit(this.state)
  this.setState({number: '', name: ''})}

  handleChange  = e => {
    const{name}=e.target
    console.log(name)
     this.setState({ [name]: e.target.value });
  };

  
  render() {
    const { number } = this.state;
    return (
      <form action="" className="w-50" onSubmit={this.handleSubmit}>
        {/* ставимо на форму onSubmit={this.handleSubmit} а на батон не вішаємо по */}
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
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

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propType={onSubmit:PropTypes.func.isRequired}