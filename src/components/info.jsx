import React, { Component } from 'react';
import AppStore from 'stores/app_store'
import * as AppActions  from 'actions/app_actions'
import { connect } from 'react-redux';

class Info extends Component {
	constructor(props) {
    super(props);
  }

  incValue(){

  	this.props.dispatch(AppActions.increase(this.props.counter));
	console.log(this.props.counter)
  }

	render() {
	return (
		<div>
			<div className="jumbotron">
				Info
			</div>
			<button onClick={this.incValue.bind(this)}>Inc</button>			
		</div>
		)
	}
};

const mapStateToProps = state => {
  return {
    ...state.app
  };
};

export default connect(mapStateToProps)(Info)
