import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'



class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;