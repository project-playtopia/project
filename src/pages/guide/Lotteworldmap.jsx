import React from 'react';
import { Map , MapMarker} from 'react-kakao-maps-sdk';

const Lotteworldmap = () => {
  return (
    <Map
    // 위도 경도 변경하여 사용
    center={{ lat: 37.500063360407424, lng: 127.03556954262713 }}
    style={{ width: "100%", height: "360px" }}
  >
    
    <MapMarker 
    // 위도 경도 변경하여 사용
    position={{ lat: 37.500063360407424, lng: 127.03556954262713 }}>
      <div style={{color:"#000"}}>Hello World!</div>
    </MapMarker>
  </Map>
  );
};

export default Lotteworldmap;