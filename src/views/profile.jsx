import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends Component {


  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>My Profile</h2>
            <hr />
              <RaisedButton label="Primary" primary={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile