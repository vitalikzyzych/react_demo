import React, { Component } from 'react';

class Profile extends Component {


  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>My Profile</h1>
            <hr />
            <button className="c-hamburger c-hamburger--htla">
              <span>toggle menu</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile