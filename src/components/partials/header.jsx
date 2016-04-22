import React, { Component } from 'react';
import { Link } from 'react-router'
import Hamburger from 'components/shared/hamburger'
import * as AppActions  from 'actions/authenticate'
import { connect } from 'react-redux'
class Header extends Component {
  authButton(){
      if (this.props.auth.isAuth) {
        return <button className="btn btn-primary" onClick={() => this.props.signOut()} style={{marginTop:6}}>Sign Out</button>
      }
       return <button className="btn btn-primary" onClick={() => this.props.signIn()} style={{marginTop:6}}>Sign In</button>
  }

  render() {
    return (
    	<header>
			<nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
		        <div className="container-fluid">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <Link className="navbar-brand page-scroll" to="/">React Demo</Link>
		                <Hamburger type="elastic"/>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav navbar-right">
		                    <li>
		                        {this.authButton()}
		                    </li>
                        <li>
                            <Link className="page-scroll" to="/info">Info</Link>
                        </li>
		                    <li>
		                        <Link className="page-scroll" to="/profile">Profile</Link>
		                    </li>
		                </ul>
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
