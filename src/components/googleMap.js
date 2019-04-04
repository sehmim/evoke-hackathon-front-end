import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const divStyle = {
  cursor: 'pointer',
};

const AnyReactComponent = () => 
<div onClick={() => this.showToronto()} style={divStyle}>
  <i className="material-icons">add</i>
</div>;
 
class GoogleMapComponent extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="location" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key:'AIzaSyCA42LpnbUKoRRYV5iGJXvm7mZoGN3RLyM',
              language: 'en'

             }}
          defaultCenter={
            {
                lat: 43.653908,
                lng: -79.384293
              }
          }
          defaultZoom={ 10 }
        >
          <AnyReactComponent
            lat={43.653908}
            lng={ -79.3832}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMapComponent;