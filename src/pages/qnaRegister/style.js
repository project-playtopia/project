import styled from "styled-components";

const S = {};

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
  
  @media (max-width: 727px){
        width: 350px;
        height: 82px;
        font-size: 38px;
    
    }

`;

S.StyledHeaderBox = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid #97D9FA;
  width: 90%; 
  max-width: 900px;
  padding: 10px;
  

  @media (max-width: 727px){
        width: 356px;
        height: 50px;
        font-size: 15px;
        padding: 0px;
        margin-top: 20px;
        justify-content: center;
    
    }
`


S.subp =styled.p`
    color: #FE78C0;
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

S.contentbox = styled.div`
    display: flex;
`
S.category = styled.select`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  width: 300px;
  height: 40px;
  margin-top: 20px;

  @media (max-width: 727px){
        width: 140px;
        height: 50px;
        font-size: 14px;
        padding: 0px;
  }
`
S.divbox1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

S.divbox2 = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
S.buttonmargin = styled.div`
  margin-left: 250px;
  @media (max-width: 727px){
    margin-left: 0px;
    margin-bottom: 30px;
    
  }
`



S.category2 = styled.select`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  width: 300px;
  height: 40px;
  margin-top: 20px;
  margin-left: 250px;

  @media (max-width: 727px){
        width: 140px;
        height: 50px;
        font-size: 14px;
        padding: 0px;
        margin-left: 40px;
        margin-right: 50px;
    }
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
        width: 350px;
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
  width: 850px;
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

S.StyledInput3 = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 850px;
  height: 300px;
  box-sizing: border-box;
  @media (max-width: 727px){
        width: 350px;
        height: 180px;
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
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 727px){
        width: 356px;
        height: 50px;
        font-size: 15px;
        padding: 0px;
        margin-top: 20px;
        margin-right: 90px;
    }  
`

S.subtitle2 = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 550px;
    

    @media (max-width: 727px){
        width: 356px;
        height: 50px;
        font-size: 15px;
        padding: 0px;
        margin-top: 20px;
        margin-right: 260px;
    }  
`

S.marginleft = styled.p`
  margin-left: 400px;
  @media (max-width: 727px){
        
        margin-left: 40px;
        font-size: 15px;
    
    }
`

export default S;