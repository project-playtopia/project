import styled from "styled-components";


const S = {};



S.button = styled.div`
    display: flex;
    justify-content: right;
    margin: auto;
    width: 1300px;
`

S.LiRow = styled.div`
    display : flex;
    flex-direction: row;
    background-color: #FFFFFF;
    list-style:none;
  
    border-radius: 30px;
    list-style:none;
    & div {
        margin: 10px;
        text-align: center;
    }
    
`

S.pagebutton = styled.div`
   display: flex;
   justify-content : center;
   margin: 20px 0px 0px 0px;
   color: #FE78C0;
`

S.footer = styled.div`
   display: flex;
   justify-content: end;
   margin-right: 150px;
`
S.contanier = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

S.header = styled.div`
    display: flex;
    justify-content: center;
    background-color: #D7F2FF;
    height: 200px;
    margin: 30px auto;
    border-radius: 30px;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 1200px;
        & div {
            background-color: #fff;
        }

        & h1 {
            font-size: 50px;
            margin: 20px;
            @media (max-width: 727px){
            font-size: 38px;   
        }

        }

        @media screen and (max-width: 1200px) {
        width: 90%;
        }

        @media (max-width: 727px){
            width: 350px;
            height: 150px;
        }
    
`

S.margin = styled.div`
    margin-top: 100px;
`
S.okbutton = styled.button`
  width: 160px;
  height: 55px;
  background-color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px;
  margin-left: 800px;
  @media (max-width: 727px){
        width: 360px;
        margin-top: 30px;
        margin-left: 0px;
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
S.SearchWrapper = styled.div`
display: flex;
border-radius: 30px;
@media (max-width: 727px){
    grid-column: 1 / 5;
}
`;

S.SearchInput = styled.input`
width: 620px;
height: 60px;
background-color: #fff;
border: 1px solid #1FB1D9;
border-radius: 30px 0 0 30px;
outline: none;
padding-left: 1rem;
font-size: 15px;
@media (max-width: 727px){
    width: 300px;
    height: 40px;
}
`;

S.SearchBtn = styled.button`

background-color: #fff;
border: 1px solid #1FB1D9;
border-radius: 0 30px 30px 0;
cursor: pointer;
`;

export default S;