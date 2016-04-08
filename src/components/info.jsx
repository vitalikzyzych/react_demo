import React, { Component } from 'react';
import AppStore from 'stores/app_store'
import AppAction from 'actions/app_actions'

class Info extends Component {
	constructor(props) {
    super(props);
    this.state = {count: AppStore.getVal()}
  }

  incValue(){
  	AppAction.incrementTest(this.state.count);
  	this.setState({count: AppStore.getVal()})
  }

	render() {
	return (
		<div>
			<div className="jumbotron">
				Info {this.state.count}
			</div>
			<button onClick={this.incValue.bind(this)}>Inc</button>			
		</div>
		)
	}
};


export default Info
