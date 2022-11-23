import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/thunk';

export default function ContactList({ contacts }) {

  const dispatch = useDispatch();
  const handleRemoveContact = id => dispatch(deleteContact(id));

  // const onDeleteBtnClick = ()=>{onBtnClick(contact.name)}
  return contacts.map(contact => {
    const style = { display: 'flex', alignItems: 'baseline',justifyContent: "space-between", marginLeft:'5px' };
    return (
      <div key={contact.id} style={style}  >
        <p style={{ marginRight: '25px' }}>
          {contact.name}:{contact.number}
        </p><div style={style}>
          {contact.isOpenToWork? <span class="badge bg-secondary ">OpenToWork</span>:<span class="badge bg-secondary ">NotOpenToWork</span>}
        
        <button
          name={contact.name}
          onClick={() => handleRemoveContact(contact.id)}
          type="button"
          className="btn btn-primary"
          style={{marginLeft:'5px'}}
        >
          Delete
        </button></div>
      </div>
    );
  });
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onBtnClick: PropTypes.func.isRequired,
};
