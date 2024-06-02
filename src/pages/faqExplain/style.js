import styled from "styled-components";

const S = {};

S.backbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px;

  @media (max-width: 727px) {
    margin: auto;
    width: 360px;
  }
`;

S.buttonbox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 727px) {
    margin-right: 0px;
  }
`;

S.header = styled.h1`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 130px 0px 30px 0px;

  @media (max-width: 727px) {
    font-size: 38px;
  }
`;

S.content = styled.div`
  display: flex;
  border-top: 1px solid #1FB1D9;
  letter-spacing: 30px;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  padding-top: 90px;
  padding-left: 40px;
  width: 750px;
  line-height: 1.5;

  @media (max-width: 727px) {
    width: 100%;
    padding: 20px;
    height: auto;
    letter-spacing: 15px;
    
    font-size: 15px;
  }
`;

S.title = styled.div`
  display: flex;
  background-color: #D7F2FF;
  width: 800px;
  height: 105px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px 30px 0px 0px;
  font-size: 24px;
  padding-left: 40px;

  @media (max-width: 727px) {
    width: 100%;
    height: 80px;
    padding-right: 30px;
    font-size: 15px;
  }
`;

S.container1 = styled.div`
  border-radius: 30px;
  border: 1px solid #1FB1D9;
  width: 800px;
  height: 400px;

  @media (max-width: 727px) {
    width: calc(80% - 2px); 
    height: auto;
    border: 1px solid #1FB1D9;
    border-radius: 30px;
    margin-left: 70px;
    font-size: 15px;
  }
`;

S.container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 727px) {
    width: 100%;
  }
`;

S.a = styled.p`
  font-size: 24px;
  color: #FE78C0;
  margin: 0px 10px 0px 0px;
  padding-bottom: 20px;
  @media (max-width: 727px) {

    font-size: 15px;
  }
`;

export default S;
