import styled from 'styled-components'

const S = {};

S.Mainimage = styled.img`
    margin: 0px 0px 0px 250px;
    width: 100%; 
    max-width: 1000px; 
    height: auto; 
    @media (max-width: 727px){
            width: 283px;
            height: auto;
            margin : auto;
           
    } 

`
S.imagediv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

S.Container = styled.div`
    display: flex;
    border-width: 1px 0px 1px 0px;
    border-color: #1FB1D9;
    border-style: solid;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px 30px 0px;
    margin: 0px 0px 30px 140px;


    @media (max-width: 727px){
        display: flex;
        align-items: center;

        font-size: 16px;
        margin-left: 50px;
        margin-right: 50px;
           
    } 

  max-width: 1200px; 
  height: auto; 
`

S.title = styled.p`
    font-size: 30px;
    @media (max-width: 727px){
            font-size: 20px;   
    } 
`

S.date = styled.p`
    font-size: 16px;
    @media (max-width: 727px){
            font-size: 12px;   
    }
`
S.head = styled.p`
    font-size: 18px;
    @media (max-width: 727px){
            font-size: 14px;   
    }
`

S.margin = styled.div`
    margin-top: 150px;
`



export default S;