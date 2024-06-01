import styled from "styled-components";

const S = {};
S.header = styled.div`
  display: flex;
  font-size: 50px;
  justify-content: center;
  margin-bottom: 50px;
  
  @media (max-width: 727px) {
    font-size: 38px;
  }
`;

S.StyledInput = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-left: 30px;
  width: 400px;
  height: 40px;
  @media (max-width: 727px) {
    width: 280px;
    height: 30px;
    margin-left: 20px;
    margin-top: 20px;
  }

`;

S.StyledInput2 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-right: 15px;
  margin-left: 30px;
  width: 110px;
  height: 40px;
  @media (max-width: 727px) {
    width: 80px;
    height: 30px;
    margin-left: 5px;
    margin-top: 30px;
  }
`;

S.StyledInput3 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-left: 15px;
  width: 110px;
  height: 40px;
  @media (max-width: 727px) {
    width: 80px;
    height: 30px;
    margin-left: 5px;
    margin-top: 30px;
  }
`;

S.StyledInput4 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-left: 15px;
  width: 110px;
  height: 40px;
  @media (max-width: 727px) {
    width: 80px;
    height: 30px;
    margin-left: 5px;
    margin-top: 30px;
  }
`;

S.StyledInput5 = styled.input`

  @media (max-width: 727px) {

    margin-top: 30px;
  }
`;

S.subp = styled.p`
    margin-right: 370px;
    @media (max-width: 727px) {
    margin-right: 240px;
  }
`
S.subp2 = styled.p`
margin-top: 20px;
    margin-right: 190px;
    @media (max-width: 727px) {
    margin-right: 70px;
  }
`

S.container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

S.ptitle = styled.p`
  font-size: 18px;

  @media (max-width: 727px) {
    font-size: 15px;
    padding-bottom: 20px;
    padding-top: 20px;
    
  }
`;

S.titlebox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  width: 800px;
  height: 300px;
  overflow: hidden; 
  box-sizing: border-box; 
  
  @media (max-width: 727px) {
    font-size: 15px;
    width: 450px;
    height: 300px;
    padding: 10px; 
  }
  
  div {
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
  }
`;

S.contentbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1FB1D9;
    border-radius: 15px 15px 15px 15px ;
    width: 800px;
    height: 500px;
    font-weight: 1.5px;
    margin-top: 40px;
    flex-direction: column;
    line-height: 2;
    padding: 20px;
    box-sizing: border-box; 
    overflow: hidden; 

    @media (max-width: 727px) {
    font-size: 12px;
    width: 450px;
    height: 500px;
    padding: 20px; 
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