import styled from 'styled-components'

const S = {};

S.title = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin: 20px 0px 30px 0;   
    
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
S.H1 = styled.div`
    font-size: 50px;
    display: flex;
    justify-content: center;
    margin: 120px 0px 20px 0px;
    width: 100%; 
    text-align: center; 
    
`
S.MainImage = styled.img`
  width: 100%; 
  max-width: 1200px; 
  height: auto; 
  
`
S.MainImagediv = styled.div`
justify-content: center;
  display: flex;
`

S.contentdiv = styled.div`
justify-content: center;
  display: flex;
`

S.divdiv = styled.div`
justify-content: center;
  display: flex;
`

S.SideBar = styled.div`
    background-color: ${ ({theme}) => theme.PALETTE.primary["main_soft"]};
    height: 65px;
    font-size: 24px;
    border-radius: 30px;
    margin: 20px 0px 0px 0px;
    align-items: center;
    display: flex;
    color: #006C93;
    width: 100%; 
    max-width: 1200px; 
    & svg.bullhorn path {
            color: black;
        }
    
    
`

S.icon = styled.div`
        margin: 0px 40px 0px 60px;
        font-size: 43px;
`

S.SideBardiv = styled.div`
justify-content: center;
  display: flex;
  

`
S.content = styled.div`
    width: 100%; 
    max-width: 1200px; 
    height: 246px;
    border: 1px solid #1FB1D9;
    border-radius: 30px;
    margin: 20px auto; 
    display: flex;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 1200px) {
        width: 90%; /
    }

    @media screen and (max-width: 600px) {
        height: auto; 
    }
    `
    
S.contenttitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 19px;
    
`
S.ContentImage = styled.img`
    width: 331px;
    height: 222px;
    margin: 0 0 0 10px;
    border-radius: 30px;
`
S.subtitle = styled.p`
    font-size: 30px;
    color: black;
    
`
S.subcontent = styled.div`
    font-size: 24px;
    margin: 30px 0 0 0;
    width: 790px;
    display: flex;
    justify-content: center;
    line-height: 30px;
    
`

export default S;