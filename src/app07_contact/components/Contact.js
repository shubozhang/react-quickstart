import React, { Component } from 'react';
import { object, func } from 'prop-types';
import './contact.css';

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // arrow function does not need bind this, but regular functions need.
  onShowClick = e => console.log(e.target);

  onDeleteClick = () => {
      this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: object.isRequired,
  deleteClickHandler: func.isRequired
};
