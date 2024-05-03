import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Everlandmap = () => {
  return (
    <Map
    center={{ lat:  37.2899137, lng: 127.2166214 }}
    style={{ width: "60%", height: "360px", margin : "60px"}}
  >

    <MapMarker 
    position={{ lat:  37.2899137, lng: 127.2166214 }}>
      <div style={{color:"#000"}}>Everland</div>
    </MapMarker>
  </Map>
  );
};

export default Everlandmap;