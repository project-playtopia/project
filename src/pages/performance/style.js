import styled from 'styled-components';

const S = {};


S.Div = styled.div`

  display: flex; // Flexbox 레이아웃 사용
  justify-content: center; // 내부 요소(버튼)를 가운데 정렬
  gap: 20px; // 버튼 사이의 간격 
  border-top: 1px solid #9F9F9F;
  border-bottom: 1px solid #9F9F9F;
  padding: 10px;
  margin: 20px auto; // 상하 20px, 좌우 auto로 가운데 정렬
  width: 1200px; 
`



S.Button = styled.button`

border-radius: 50%;
width: 100px;
height: 100px;
background-color: ${(props) => (props.isSelected ? '#1FB1D9' : '#ffffff')};
border: 1px solid #1FB1D9;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

`




export default S;