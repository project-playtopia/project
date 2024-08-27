import styled from "styled-components";

const S = {};

S.title = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin: 20px 0px 30px 0;   
    
`
S.pagebutton = styled.div`
display: flex;
justify-content : center;
margin: 20px 0px 0px 0px;
color: #FE78C0;
`

S.everland = styled.div`
    
    margin: 0 15px 0 0;
    border-width: 0px 1px 0px 1px;
    border-color: black;
    border-style: solid;
    padding: 0px 15px 0px 15px;
    color: ${({ color }) => color || '#000'}
    
`
S.seoulland = styled.div`
color: ${({ color }) => color || '#000'}

`

S.lotteworld = styled.div`
    margin: 0 15px 0 0;
    color: ${({ color }) => color || '#000'}
    
`

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
            @media (max-width: 727px){
                font-size: 38px;
                }  

        }

        @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        margin: 50px 20px; 
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
margin-right: 40px;
@media (max-width: 727px){
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
`;

S.title = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin: 20px 0px 30px 0; 
    margin-top: 60px;
    @media (max-width: 727px){
    font-size: 15px;
    }  
`
S.backbutton = styled.button`
  width: 140px;
  height: 55px;
  background-color: white;
  color: #1FB1D9;
  border: 1px solid #1FB1D9;
  border-radius: 30px 30px 30px 30px;
  @media (max-width: 727px){
        width: 90px;
        height: 40px;
        
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
export default S;
