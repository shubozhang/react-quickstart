import React, { Component } from 'react'


const Context = React.createContext();

export default class Provider extends Component {
    state = {
        contacts: [
          { id: 1, name: 'john', email: 'john@mail.com', phone: '555-555-5555' },
          { id: 2, name: 'bill', email: 'bill@mail.com', phone: '555-555-5555' },
          { id: 3, name: 'danny', email: 'danny@mail.com', phone: '555-555-5555' }
        ]
      };

      render(){
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      }
}
