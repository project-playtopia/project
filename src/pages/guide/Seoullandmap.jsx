import React from 'react';
import { Map , MapMarker } from 'react-kakao-maps-sdk';

const Seoullandmap = () => {
  return (
    <Map
    center={{ lat:  37.4341563, lng: 127.0201267 }}
    style={{ width: "85%", height: "400px", margin : "60px",position:"sticky"}}
  >

    <MapMarker 
    position={{ lat:  37.4341563, lng: 127.0201267 }}>
      <div style={{color:"#000"}}>Seoulland</div>
    </MapMarker>
  </Map>
  );
};

export default Seoullandmap;