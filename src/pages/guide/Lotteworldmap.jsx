import React from 'react';
import { Map , MapMarker} from 'react-kakao-maps-sdk';


const Lotteworldmap = () => {
  
  return (
    <Map
    center={{ lat:  37.5111158, lng: 127.098167 }}
    style={{ width: "85%", height: "400px", margin : "60px", position:"sticky"}}
  >
    
    <MapMarker 
    position={{ lat:  37.5111158, lng: 127.098167 }}>
      <div style={{color:"#000"}}>Lotte World</div>
    </MapMarker>
  </Map>
  );
};

export default Lotteworldmap;