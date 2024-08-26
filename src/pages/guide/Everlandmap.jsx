import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Everlandmap = () => {
  return (
    <Map
    center={{ lat:   37.29301466863182, lng: 127.20216762012923 }}
    style={{ width: "50%", height: "400px"}}
  >

    <MapMarker 
    position={{ lat:  37.29301466863182, lng: 127.20216762012923 }}>
      <div style={{color:"#000"}}>Everland</div>
    </MapMarker>
  </Map>
  );
};

export default Everlandmap;

