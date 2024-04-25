import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from'../../components/button/BasicButton.jsx';
import {NavLink} from 'react-router-dom';


const ThreeButtons = ({size, shape, variant, children, ...rest}) => {
  const location = useLocation();

  const getButtonStyle =(path, index) =>{
    return location.pathname === path 
    ? {width : "120px", height : "57px", fontSize : "18px", color : "#1FB1D9", background : "none" , fontWeight : "bold"}
    : {width : "120px", height : "57px", fontSize : "18px", color : "#000000", background : "none" , fontWeight: "regular"}
  }

  const verticalLineStyle = {
    height: '18px', 
    width: '1.8px', 
    backgroundColor: '#000000', 
    alignSelf: 'center'  
  };

  return (
    <>
      <div  style = {{display: "flex", justifyContent: "center" }} >
        
     <NavLink to = {"/attraction/lotteworld"} activeStyle={{ background: "blue" }}>
      <Button  children={"롯데월드"}  style={getButtonStyle("/attraction/lotteworld")}  />
      </NavLink>

      <div style={verticalLineStyle}></div>

      <NavLink to={"/attraction/everland"}>
      <Button  children={"에버랜드"}    style={getButtonStyle("/attraction/everland")}  />
      </NavLink>

      <div style={verticalLineStyle}></div>

      <NavLink to={"/attraction/seoulland"}>
      <Button  children={"서울랜드"}  style={getButtonStyle("/attraction/seoulland")} />
      </NavLink>
      </div>
    </>
  );
}

export default ThreeButtons;





