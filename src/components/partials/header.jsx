import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {

  render() {
    return (
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
	            </div>
	            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	                <ul className="nav navbar-nav navbar-right">
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
    );
  }
}

export default Header;