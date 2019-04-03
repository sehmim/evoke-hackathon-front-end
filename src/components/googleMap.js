import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMapComponent extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="location" style={{ height: '100vh', width: '100%', padding : '0 0 200px 0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key:'AIzaSyANCeyMw3Y82GWquW6R1wfRAXRqHK9s59g',
              language: 'en'

             }}
          defaultCenter={
            {
                lat: 43.653908,
                lng: -79.384293
              }
          }
          defaultZoom={ 12 }
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