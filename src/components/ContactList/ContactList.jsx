import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList ({ contacts, onClick }) { 

  return contacts.map(contact => {
    const style = { display: 'flex', alignItems: 'baseline',justifyContent: "space-between", marginLeft:'5px' };
    return (
      <div key={contact.id} style={style}  >
        <p style={{ marginRight: '25px' }}>
          {contact.name}:{contact.number}
        </p><div style={style}>
          {contact.isOpenToWork? <span className="badge bg-secondary ">OpenToWork</span>:<span className="badge bg-secondary ">NotOpenToWork</span>}
        
        <button
          name={contact.name}
          onClick={()=>onClick(contact.id)}
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
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
