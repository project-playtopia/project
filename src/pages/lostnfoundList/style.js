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

S.head = styled.div`
    display: flex;
    width: 1200px;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    flex-direction: column;
    margin: 30px auto;

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

        @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        margin: 50px 20px; 
    }     

`

export default S;
