// 
import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Main = styled.main`
  display: flex;
  flex-direction: row; 
  width: 100%;
  height: 100%;
  @media (max-width: 727px) {
    width: 100%;
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
  }
`;

S.ImageContainer = styled.div`
  width: 33.3333333%; 
  height: 100%;
  position: relative;
  @media (max-width: 727px) {
    width: 100%;
    object-fit: cover;
    height: 40%;
  }
`;

S.Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(50%);  
  background-color: rgba(4,4,20,0.7); 
   transition: 0.5s;
  &:hover {
    filter: brightness(100%);
    /* transform: translate(-30%, 0); */
  }
`;

S.OverlayImage = styled.img`
  position: absolute;
  top: 25%;
  left: 30%;
  width: 200px;
  height: 120px;
  @media (max-width: 727px) {
    width: 200px;
    height: 120px;
    top: 30%; 
    left: 30%; 
    transform: translateX(-50%); 
  }
`;

S.buttonWrapper = styled.div`
  .desktopbutton{
    position: absolute;
    top: 70%;
    left: 33%;
    width: 160px;
    height: 55px;
    padding: 16px;
    color: #fff;
    background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};
    border: none;
    border-radius : 50px;
    @media (max-width: 726px) {
      display: none; 
    }
  }
`;
S.MobileButtonFirst = styled.button`
  display: none; 
  @media (max-width: 726px) {
    display: block;
    position: absolute; 
    right: 0%;
    top: 20%;
    height: 80%;
    width: 20%;
    overflow: hidden;
    background-color: ${ ({theme}) => theme.PALETTE.primary["main"]}; 
    border: solid  0.1px rgba(231, 231, 231,0.3);
    z-index: 1;
    color: #fff;
    clip-path: polygon(0 0, 10% 50%, 0 100%, 100% 100%, 100% 0);
  }
`;


S.MobileButton = styled.button`
  display: none; 
  @media (max-width: 726px) {
    display: block;
    position: absolute;
    right:0;
    top: 0;
    width: 20%; 
    height: 100%;
    background-color: ${ ({theme}) => theme.PALETTE.primary["main"]}; 
    border: solid  0.1px rgba(231, 231, 231,0.3);
    z-index: 1;
    color: #fff;
    clip-path: polygon(0 0, 20% 50%, 0 100%, 100% 100%, 100% 0);
  }
`;




export default S;
