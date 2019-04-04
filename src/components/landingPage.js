import React, { Component } from 'react';
import GoogleMapComponent from "./googleMap";
import TemporaryGoogleMap from "./TemporaryGoogleMap";
import Languages from './languages';
import Developers from "./developers";
import '../App.css'
class LandingPage extends Component {
  state ={
    idClicked: ''
  }
  handleidClicked = (id) => {
    this.setState({idClicked: id});
}
  render() {
    return (
      <div>
        {/* <GoogleMapComponent></GoogleMapComponent> */}
        <TemporaryGoogleMap onSelectId={this.handleidClicked}></TemporaryGoogleMap>
        <div className="landing-page">
          <div className="landing-page-devs">
            <h1 id="languages"> Top Languages in {this.state.idClicked}</h1>
            <Languages className=""></Languages>
          </div>
          {/* <div className="landing-page-lang">
            <h1> Top Developers </h1>
            <Developers className="developer"></Developers>
          </div> */}
        </div>

      </div>
    );
  }
}

export default LandingPage;
