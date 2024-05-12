import styled from "styled-components";

const S = {};
S.header = styled.div`
    display: flex;
    font-size: 50px;
    justify-content: center;
    margin-bottom: 50px;
`
S.StyledInput = styled.input`
    border: 1px solid #1FB1D9;
    border-radius: 15px 15px 15px 15px ;
    margin-bottom: 30px;
    
`
S.container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`
S.ptitle = styled.p`
    font-size: 18px;
`
S.titlebox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1FB1D9;
    border-radius: 15px 15px 15px 15px ;
    width: 800px;
    height: 300px
    
`

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
    
`

export default S;