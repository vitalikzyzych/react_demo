import React, { Component } from 'react';
import * as authActions  from 'actions/authenticate'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux'


class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      username: '',
	      password: '',
	      usernameError: null,
	      style : {
	      	width: '100%',
	      	marginTop: '10'
	      }
	    }
  }

  onUsernameChange(event) {
  	this.validateUsername(event);
    this.setState({  username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  login (e) {
    e.preventDefault();
    const redirectTo = '/profile';
    //this.props.dispatch(authActions.login(this.state, redirectTo));
    this.props.dispatch(authActions.signIn());
  }

  validateUsername(event) {  
	  const username = event.target.value;
	  const alphanumeric = /^[a-z0-9]+$/i;
	  const usernameIsValid = alphanumeric.test(username);
	  let error;
	  if (event.target.value.length > 0 && !usernameIsValid ){
	  	error = 'Username must consist of only letters and numbers';
	  } else {
	  	error = null;
	  }

	  this.setState({ usernameError: error });  
	}


	render() {
		return (
			<div className="form-signin">
			<form onSubmit={::this.login}>
				<TextField
					hintText="Username"
					value={this.state.username}
					onChange={this.onUsernameChange.bind(this)}
					errorText={this.state.usernameError}
					fullWidth={true}
				/><br />
				<TextField
					hintText="Password"
					type="password"
					value={this.state.password}
					onChange={this.onPasswordChange.bind(this)}
					fullWidth={true}
				/><br />
				<RaisedButton
					type="submit"
					label="Sign Up"
					primary={true}
					style={this.state.style}
				/>
			</form>
			</div>
    	)
  	}
}

function mapStateToProps(state){
  return {
  	auth: state.auth,
  	login: state.login
  }
}

export default connect(mapStateToProps)(Login)