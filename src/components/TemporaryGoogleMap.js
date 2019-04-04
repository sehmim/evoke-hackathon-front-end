
import React, { Component } from 'react';
import '../stuff.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'



class TemporaryGoogleMap extends Component {
    handleStateTempMapToronto = (e) => {
        this.props.onSelectId('Toronto');  
    }
    handleStateTempMapMtl = (e) => {
        this.props.onSelectId('Montreal');  
    }
    handleStateTempMapVan = (e) => {
        this.props.onSelectId('Vancouver');  
    }
    handleStateTempMapYl = (e) => {
        this.props.onSelectId('Yellowknife');  
    }
  render() {
    return (
      <div className="body-ggl">
        <AnchorLink name="toronto" onClick={()=> this.handleStateTempMapToronto()} className="body-ggl-1" href="#languages" >     
              <img src="" ></img>
              <h1 className="center" >Toronto</h1>
        </AnchorLink> 
        <AnchorLink className="body-ggl-2" href="#languages" onClick={()=> this.handleStateTempMapVan()} >     
              <img src="" ></img>
              <h1 className="center">Vancouver</h1>
        </AnchorLink> 
        <AnchorLink className="body-ggl-3" href="#languages" onClick={()=> this.handleStateTempMapMtl()} >     
              <img src="" ></img>
              <h1 className="center" >Montreal</h1>
        </AnchorLink> 
        <AnchorLink className="body-ggl-4" href="#languages" onClick={()=> this.handleStateTempMapYl()} >     
              <h1 className="center" >Yellowknife</h1>
              <img  className="body-ggl-4-img" src="https://cdn.europosters.eu/image/1300/posters/chinstrap-penguins-i40502.jpg" ></img>
        </AnchorLink> 
      </div>
    );
  }
}

export default TemporaryGoogleMap;
