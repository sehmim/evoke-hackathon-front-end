import React, { Component } from 'react';
import GoogleMapComponent from "./googleMap";
import Languages from './languages';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <GoogleMapComponent></GoogleMapComponent>
        <div>
            <Languages></Languages>
        </div>
      </div>
    );
  }
}

export default LandingPage;
