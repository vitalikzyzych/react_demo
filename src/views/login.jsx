import React, { Component } from 'react';
import * as AppActions  from 'actions/app_actions'
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
    super(props);
  }

 //  incValue(){

 //  	this.props.dispatch(AppActions.increase(this.props.counter));
	// console.log(this.props.counter)
 //  }

	render() {
	return (
		<div>
			<div className="jumbotron">
				Login
			</div>		
		</div>
		)
	}
};

const mapStateToProps = state => {
  return {
    ...state.login
  };
};

export default connect(mapStateToProps)(Login)