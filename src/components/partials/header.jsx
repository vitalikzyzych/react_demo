import React, { Component } from 'react';
import { Link } from 'react-router'
import Hamburger from 'components/shared/hamburger'
import * as AppActions  from 'actions/authenticate'
import { connect } from 'react-redux'
class Header extends Component {
  // authButton(){
  //     if (this.props.auth.isAuth) {
  //       return <button className="btn btn-primary" onClick={() => this.props.signOut()} style={{marginTop:6}}>Sign Out</button>
  //     }
  //      return <button className="btn btn-primary" onClick={() => this.props.signIn()} style={{marginTop:6}}>Sign In</button>
  // }
  getLinks(){
  	if (this.props.auth.isAuth) {
  		return (
		    <ul className="nav navbar-nav navbar-right">
		        <li>
		            <Link className="page-scroll" to="/info">Info</Link>
		        </li>
		        <li>
		            <Link className="page-scroll" to="/profile">Profile</Link>
		        </li>
		    </ul>
	    )
  	} else {
  		return (
		    <ul className="nav navbar-nav navbar-right">
		        <li>
		            <Link className="page-scroll" to="/login">Login</Link>
		        </li>
		        <li>
		            <Link className="page-scroll" to="/registration">Registration</Link>
		        </li>
		    </ul>
	    )
  	}
  }
  render() {
    return (
    	<header>
			<nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
		        <div className="container-fluid">
		            <div className="navbar-header">
		                <Link className="navbar-brand page-scroll" to="/">Test</Link>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		            	{this.getLinks()}
		            </div>
		        </div>
		    </nav>
	    </header>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default connect(mapStateToProps, AppActions)(Header);
