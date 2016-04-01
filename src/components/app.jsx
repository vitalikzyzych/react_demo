import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import Header from 'components/partials/header'


class App extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <Header/>
        <div className="main-container">
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;