import styled from "styled-components";

const S = {};


S.header =styled.h1`
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0px 30px 0px;
`

S.content = styled.div`
    display: flex;
    
    letter-spacing: 30px;
    
    justify-content: center;
    text-align: center;
    padding-top: 40px;
    padding-left: 40px;
    width: 750px;
    line-height: 1.5;
`

S.namebox = styled.div`
border-top: 1px solid #1FB1D9;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
    
`

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
`

S.padding = styled.p`
    padding-left: 20px;
`

S.container1 = styled.div`
    border-radius: 30px;
    border: 1px solid #1FB1D9;
    width: 800px;
    height: 400px;
`

S.container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

S.a =styled.p`
    font-size: 24px;
    color: #FE78C0;
    margin: 0px 10px 0px 0px;
    padding-bottom: 20px;
`

export default S;