import styled from "styled-components";

const S = {};

S.header = styled.h1`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 0px;
`;

S.container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.content = styled.div`
  display: flex;
  border: solid 1px #1fb1d9;
  flex-direction: column;
  float: right  ; 
  height: 300px;
  width: 400px;
  font-size: 18px;
  border-radius: 15px 15px 15px 15px;
  align-items: center;
  justify-content: center;
  line-height: 2;
`;

S.imagebox = styled.div`
  display: flex;
  float: left; 
  width: 300px;
  height: 300px;
  margin-right: 300px;
`;

S.margin = styled.div`
  margin-top: 150px;
`;

S.buttonbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    
`

S.BasicButton = styled.button`
  
  color: #1FB1D9; 
  background-color: #fff; 
  padding: 10px 20px; 
  border: 1px solid #1FB1D9;
  border-radius: 30px 30px 30px 30px;
  width: 160px;
  height: 55px;
  margin-right: 40px;
  

`;

export default S;
