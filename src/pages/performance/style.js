import styled from 'styled-components';

const S = {};


S.Title = styled.div`
  font-size : 30px;
  font-weight : bold;
  margin : 150px 700px 0 700px;
`



S.Div = styled.div`
  
  display: flex; // Flexbox 레이아웃 사용
  justify-content: center; // 내부 요소(버튼)를 가운데 정렬
  gap: 20px; // 버튼 사이의 간격 
  border-top: 1px solid #9F9F9F;
  border-bottom: 1px solid #9F9F9F;
  padding: 20px;
  margin: 100px auto; // 상하 20px, 좌우 auto로 가운데 정렬
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

S.Centerul = styled.div`
  list-style: none; // 기본 리스트 스타일 제거
  padding: 0;
  margin: 0 0 100px -400px; 
  display: flex;
  flex-direction: column; // 아이템들을 세로로 나열
  align-items: center;
  border-bottom: 1px solid #9f9f9f;
  
`
S.List = styled.div`

margin-left: 30px;

p {
  margin: 8px 0;
  /* text-align: center; */

span{

 
}

}



`

S.Img = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 20px;
  text-align: center;
`



export default  S;