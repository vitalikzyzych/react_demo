import React, { Component } from 'react';
import * as AppActions  from 'actions/app_actions'
import { connect } from 'react-redux';

class Registration extends Component {
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
				Registration
			</div>		
		</div>
		)
	}
};

const mapStateToProps = state => {
  return {
    ...state.registration
  };
};

export default connect(mapStateToProps)(Registration)