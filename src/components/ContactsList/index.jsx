import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li className={styles.FilterItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                name="delete"
                type="text"
                onClick={() => this.props.onDeleteContact(contact.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
