import React, { Component } from 'react';
import cn from 'classnames';

class Hamburger extends Component {

  render() {
  	var classes = cn(
  			"hamburger",
  			"hamburger--" + this.props.type,
		)
    return (
			<div className={classes}>
		    <div className="hamburger-box">
		      <div className="hamburger-inner"></div>
		    </div>
		  </div>
    );
  }
}

export default Hamburger;

// hamburger--3dx
// hamburger--3dx-r
// hamburger--3dy
// hamburger--3dy-r
// hamburger--arrow
// hamburger--arrow-r
// hamburger--arrowalt
// hamburger--arrowalt-r
// hamburger--boring
// hamburger--collapse
// hamburger--collapse-r
// hamburger--elastic
// hamburger--elastic-r
// hamburger--emphatic
// hamburger--emphatic-r
// hamburger--slider
// hamburger--slider-r
// hamburger--spin
// hamburger--spin-r
// hamburger--spring
// hamburger--spring-r
// hamburger--stand
// hamburger--stand-r
// hamburger--squeeze
// hamburger--vortex
// hamburger--vortex-r