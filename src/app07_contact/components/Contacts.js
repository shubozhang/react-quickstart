import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  state = {
    contacts: [
      { id: 1, name: 'john', email: 'john@mail.com', phone: '555-555-5555' },
      { id: 2, name: 'bill', email: 'bill@mail.com', phone: '555-555-5555' },
      { id: 3, name: 'danny', email: 'danny@mail.com', phone: '555-555-5555' }
    ]
  };

  deleteContact = (id) => {
      console.log("deleting contact", id);
      const {contacts} = this.state;
      const newContacts = contacts.filter(contact => contact.id !== id)

      this.setState({
          contacts: newContacts
      })
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
