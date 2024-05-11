import React, { useState ,useEffect } from 'react';
import S from './style.js';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useUser } from './UserContext.js';


const MyPageQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('questions');
  const { user, setUser} = useUser();

  const onClickToDelete = () => {
    let confirm = window.confirm('삭제 하시겠습니까?')
    console.log(confirm)
}


  return (
    <S.Background>
      <S.ProfileBackground>
        <S.Icon icon={faCircleUser}/>
        <S.UserP>{user ? `${user.id}님, 환영합니다` : '로그인이 필요합니다.'}</S.UserP>
        <S.OptionsContainer>
        <NavLink to={"/changepassword"}>
          <p>비밀번호 변경</p>
        </NavLink>
        <S.Deletebutton onClick={onClickToDelete}>회원 탈퇴하기</S.Deletebutton>
        </S.OptionsContainer>
      </S.ProfileBackground>
      <S.ButtonsContainer>
        <S.OptionButton
          selected={selectedOption === 'questions'}
          onClick={() => setSelectedOption('questions')}>
          <p>내가 한 질문</p>
        </S.OptionButton>
        <S.ButtonLine></S.ButtonLine>
        <S.OptionButton
          selected={selectedOption === 'reviews'}
          onClick={() => setSelectedOption('reviews')}>
          <p>내가 한 리뷰</p>
        </S.OptionButton>
      </S.ButtonsContainer>
      {/* <S.StyledTable>
        <S.StyledTRTop>
          <S.StyledLeftTD>No.</S.StyledLeftTD>
          <td>카테고리</td>
          <td>제목</td>
          <S.StyledRightTD>작성시간</S.StyledRightTD>
        </S.StyledTRTop>
        <S.styledTR>
            <S.styledTD>가나다라</S.styledTD>
        </S.styledTR>
        <S.styledTR>
            <S.styledTD>가나다라</S.styledTD>
        </S.styledTR>
        <S.styledTR>
            <S.styledTD>가나다라</S.styledTD>
        </S.styledTR>
        <S.styledTR>s
            <S.styledTD>가나다라</S.styledTD>
        </S.styledTR>
      </S.StyledTable> */}
    </S.Background>
  );
};

export default MyPageQuestion;