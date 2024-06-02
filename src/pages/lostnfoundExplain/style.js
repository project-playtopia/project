import styled from "styled-components";

const S = {};

S.buttonbox = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;

  

  @media (max-width: 727px){
    flex-direction: column-reverse;
    margin-right: 0px;
    
    
  }

`

S.backbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: white;
  color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px 30px 30px 30px;
  margin-right: 50px;
  @media (max-width: 727px){
        width: 360px;
        margin-top: 15px;
        margin-right: 0px;
        
  }
`

S.okbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px;
  @media (max-width: 727px){
        width: 360px;
        
  }
`
S.buttonbox = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 727px){
    flex-direction: column-reverse;
    margin-right: 0px;
    
    
  }

`

S.buttonbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 500px;

  @media (max-width: 727px) {
    flex-direction: column-reverse; 
    margin-top: 350px;
  }
`;

S.okbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px;
  margin-left: 50px;
  @media (max-width: 727px){
        width: 360px;
        margin: 0px;
        
  }
`
S.header = styled.h1`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 0px;

  @media (max-width: 727px) {
    font-size: 38px; 
  }
`;

S.container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 727px) {
    flex-direction: row-reverse;
  }
`;

S.content = styled.div`
  display: flex;
  border: solid 1px #1fb1d9;
  flex-direction: column;
  float: right; 
  height: 300px;
  width: 400px;
  font-size: 18px;
  border-radius: 15px 15px 15px 15px;
  align-items: center;
  justify-content: center;
  line-height: 2;

  @media (max-width: 727px) {
    width: 360px;
    height: 255px;
     margin-right: 150px;
   
  }
`;

S.imagebox = styled.div`
  display: flex;
  float: left; 
  width: 300px;
  height: 300px;
  margin-right: 300px;

  @media (max-width: 727px) {
    float: none; 
    margin-left: 200px;
   margin-right: 50px;
    margin-bottom: 20px; 
  }
`;

S.margin = styled.div`
  margin-top: 150px;
`;





export default S;
