import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  
  & a {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    & p {
      color: #000000;
    }

    &.active{
      & p{
        color: #1fb1d9;
        font-weight: 600;
      }

      & path{
        color: #1fb1d9;
      }
  }}`;



S.NavPc = styled.span`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  position: fixed; 
  top: 0; 
  left: 0; 
  background-color: #fff;
  border-bottom : solid 1px #9F9F9F;
  @media (max-width:727px) {
    display: none;
  }
`;


S.MenuItemWrapper = styled.span`
  position: relative; 
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5% 0.1%;

  &.menu-item {
    margin-left: 3%;
  }

  &.auth-item {
    margin-left: 35%;
  }

  ${({ active }) => active && `
  & .main-item {
    color: #1fb1d9;
    font-weight: 600;
  }
  border-bottom: solid 4px #1fb1d9;
`}
`;

S.SubMenuWrapper = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  top: 106%;
  left: 50%; 
  transform: translateX(-50%); 
  padding: 20px 10px;
  background-color: ${(props) => (props.active ? '#D7F2FF' : '#fff')}; 
  z-index: 100;
  white-space: nowrap;
  & p { 
    background-color: ${props => props.active ? '#D7F2FF' : 'fff'};
    padding:  ${props => props.active ? '10px' : '0'} !important;
    font-weight: ${(props) => (props.active ? `${ ({theme}) => theme.FONT_WEIGHT["semibold"]}` : `${ ({theme}) => theme.FONT_WEIGHT["regular"]}`)}!important;
    border-bottom: none !important;
    color: #000 !important;
  }
`;




S.Image = styled.img`
width: 190px;
height: 50px;
margin-left:20px ;
`


S.Main = styled.main`
flex: 1;
`

// 모바일 스타일
S.MobileImage = styled.img`
width: 130px;
height: 35px;
`

S.NavMobile = styled.div`
  display: none; 
  @media (max-width: 727px) { 
    display: flex;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: 40px;

    font-size: 18px;
    color: #fff;
    position: fixed; 
    top: 0; 

    .main-item {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: solid 0.1px #97D9FA;
      width: 55%;
      background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};

      &.active {
        background-color: #006C93;
      }
    }

    .sub-item {
      display: none; 
      padding: 20px;
      border-bottom: solid 1px #97D9FA;
      width: 55%;
      &.active {
        display: block;
        background-color: #006C93;
      }
    }
  }
`;

S.MobilesubP = styled.p`
color : #fff !important;
font-size : 18px !important;
font-weight: ${ ({theme}) => theme.FONT_WEIGHT["regular"]} !important;
border: none !important;
padding: 10px 0 !important;
`

S.MobilemainP = styled.p`
color : #fff !important;
font-size : 18px !important;
font-weight: ${ ({theme}) => theme.FONT_WEIGHT["semi-bold"]} !important;
border: none !important;
padding: 0 0 !important;
`


S.NavMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  color: #fff;
  border: solid 0.1px #E7E7E7;
  width: 100%;

`;

S.ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: ${ ({theme}) => theme.PALETTE.primary["main"]} ;
  color: #fff;
  border-bottom: solid 0.1px #97D9FA;
  width: 55%;
`;

S.MobileAuthLink = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  .sign{
    margin-right: 20px;
  }
`;


S.IconWrapper = styled.span`
  cursor: pointer;
  display: flex;
`;

// footer
S.Footer = styled.div`
  @media (min-width: 727px){
  background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  width: 100%;
  height: 40%;
  .footerlogo{
    position: relative;
    top:40%;
    left: 1%;
  }
  .footerbox{
    position: relative;
    left: 350px;
    bottom: 7%;
    border-left: solid 2px #fff;
    height: 120px;
  }
  .maker{
    position: relative;
    left: 30px;
    bottom: 7%;
    color: #fff;
    font-weight:  ${ ({theme}) => theme.FONT_WEIGHT["bold"]};
  }
  .email{
    position: relative;
    left: 30px;
    color: #fff;
    font-size: ${ ({theme}) => theme.FONT_SIZE["footer"]};
    font-weight:  ${ ({theme}) => theme.FONT_WEIGHT["thin"]};
    line-height: 20px;
  }
  }
  @media (max-width: 726px){
    display: none;
}

`

export default S;
