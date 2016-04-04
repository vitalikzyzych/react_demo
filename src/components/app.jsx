import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import Header from 'components/partials/header'
import Footer from 'components/partials/footer'


class App extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <Header/>
        <section className="main-content">
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;