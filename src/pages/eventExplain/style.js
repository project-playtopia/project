import styled from 'styled-components'

const S = {};

S.Mainimage = styled.img`
    margin: 0px 0px 0px 250px;
    width: 100%; 
    max-width: 1000px; 
    height: auto; 

`


S.Container = styled.div`
    display: flex;
    border-width: 1px 0px 1px 0px;
    border-color: #1FB1D9;
    border-style: solid;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    padding: 30px 0px 30px 0px;
    margin: 150px 0px 40px 140px;
    width: 100%; 
  max-width: 1200px; 
  height: auto; 
`

S.title = styled.div`
    font-size: 30px;
`

S.date = styled.div`
    font-size: 16px;
`
S.head = styled.div`
    font-size: 18px;
`

export default S;