import React, { Component } from 'react'
import Forecast from 'react-forecast';

class Weather extends Component{
  render() {
    return (
      <Forecast latitude={48.73} longitude={22.51} name='Simer1' color="#666666" unit = 'uk' />
    )
  }
}

export default Weather