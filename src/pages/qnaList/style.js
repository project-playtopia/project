import styled from "styled-components";

const S = {};


S.button = styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
`

S.LiRow = styled.div`
    display : flex;
    flex-direction: row;
    background-color: #FFFFFF;
    
    
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

        }

        @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        margin: 50px 20px; 
    }     
`

S.margin = styled.div`
    margin-top: 100px;
`


export default S;