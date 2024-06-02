import styled from "styled-components";

const S = {};

S.title = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: center;
  margin: 30px 0px 60px 0;

  @media screen and (max-width: 727px) {
    
    align-items: center;
    text-align: center;
  }
`;

S.divbox1 = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
S.divbox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.subtitle2 = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
  
  @media (max-width: 727px) {
    width: 356px;
    height: 50px;
    font-size: 15px;
    padding: 0px;
    margin-top: 20px;
    margin-right: 260px;
    text-align: center; 
  }
`;

S.subp2 = styled.p`
  color: #FE78C0;
  margin-right: 540px;
  
  @media (max-width: 727px) {
    margin-right: 0px; 
  }
`;



S.inputbox = styled.div`
    display: flex;
  justify-content: center;
  align-items: center; 
`

S.StyledInput = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  @media (max-width: 727px){
        width: 350px;
        height: 50px;
        font-size: 14px;
        padding: 0px;
        margin-left: 40px;
        margin-right: 50px;
    }
`;

S.subtitle = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 727px){
        width: 356px;
        height: 50px;
        font-size: 15px;
        padding: 0px;
        margin-top: 20px;
        margin-right: 0px;

        
    }  
`

S.marginleft = styled.p`
  margin-left: 400px;
  @media (max-width: 727px){
        
        margin-left: 140px;
        font-size: 15px;
    
    }
`

S.everland = styled.div`
  margin: 0 15px 0 0;
  border-width: 0px 1px 0px 1px;
  border-color: black;
  border-style: solid;
  padding: 0px 15px 0px 15px;
  color: ${({ color }) => color || "#000"};
`;

S.seoulland = styled.div`
  color: ${({ color }) => color || "#000"};
`;

S.lotteworld = styled.div`
  margin: 0 15px 0 0;
  color: ${({ color }) => color || "#000"};
`;


S.margin = styled.div`
    margin-top: 150px;
`





S.basicbox = styled.div`
    display: flex;
    & button {
        color: #1FB1D9;
        background-color: #fff;
        border: 1px solid #1FB1D9;
        margin-left: 20px;
    }
`

S.header = styled.div`
  display: flex;
  justify-content: center;
  height: 10px;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 30px auto;

  & div {
    background-color: #fff;
  }

  & h1 {
    font-size: 50px;
    margin: 20px;
  }

  & h2 {
    font-size: 50px;
    margin: 20px;
    margin-right: 600px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    margin: 50px 20px;
  }

  @media screen and (max-width: 727px) {
    width: 100%;
    align-items: center;

    & h2 {
      margin-right: 0;
      text-align: center;
    }
  }
`;

S.head = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  flex-direction: column;
  margin: 30px auto;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 50px 20px;
  }

  @media screen and (max-width: 727px) {
    width: 100%;
    align-items: center;
  }
`;

S.CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.StyledHeader = styled.div`
  margin-top: 100px;
  font-size: 50px;
  height: 131px;
  background-color: #D7F2FF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

S.StyledHeaderBox = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid #97D9FA;
  width: 90%; 
  max-width: 900px;
  padding: 10px;
`;


S.subp =styled.p`
    color: #FE78C0;
`

S.buttonbox = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;
`

S.contentbox = styled.div`
    display: flex;
`



S.inputbox = styled.div`
    display: flex;
  justify-content: center;
  align-items: center; 
`

S.StyledInput = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  @media (max-width: 727px){
        width: 140px;
        height: 50px;
        font-size: 14px;
        padding: 0px;
        margin-left: 40px;
        margin-right: 50px;
    }
`;

S.StyledInput2 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  margin-left: 250px;
  @media (max-width: 727px){
        width: 140px;
        height: 50px;
        font-size: 14px;
        padding: 0px;
        margin-left: 40px;
        margin-right: 50px;
    }
`;

S.StyledInput3 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 850px;
  height: 300px;
  box-sizing: border-box;
  @media (max-width: 727px){
        width: 390px;
        height: 300px;
        font-size: 14px;
        padding: 0px;
        margin-left: 40px;
        margin-right: 50px;
    }
`;
S.headerp = styled.p`
    padding-bottom: 10px;
   
`

S.subtitle = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
     
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

S.backbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: white;
  color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px 30px 30px 30px;
  @media (max-width: 727px){
        width: 360px;
        margin-top: 30px;
        
  }
`

S.okbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px;
  margin-left: 250px;
  @media (max-width: 727px){
        width: 360px;
        margin-left: 0px;
        
  }
`

export default S;