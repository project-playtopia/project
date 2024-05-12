import React, { useState ,useEffect } from 'react';
import S from './style.js';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext.js';


const MyPageQuestion = () => {
  // const [selectedOption, setSelectedOption] = useState('questions');
  const { user, setUser} = useUser();
  const navigate = useNavigate()

  const onClickToDelete = async () => {
    const confirm = window.confirm('playtopia를 정말 탈퇴하시겠습니까?')
    if(confirm){
      const userDelete = async () => {
          const response = await fetch('http://localhost:8000/getuser/deleteuser', {
              method : 'DELETE',
              headers: { 
                'Content-Type': 'application/json',
            },
              body: JSON.stringify({
                  userId : user.id
              })
          })
          if (!response.ok) {
            throw new Error('서버 통신 실패');
          }
          const datas = await response.json();
          return datas;
      }
      userDelete()
      .then((data)=> {
        console.log(data.message);
        alert("회원탈퇴가 완료되었습니다."); 
        setUser(null);
        navigate('/');
      })
      .catch((error)=>{
        console.error('탈퇴 처리 중 에러 발생:', error.message);
      })
    }
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
        <S.Deletebutton onClick={onClickToDelete}>회원탈퇴</S.Deletebutton>
        </S.OptionsContainer>
      </S.ProfileBackground>
      {/* <S.ButtonsContainer>
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
        </S.OptionButton> */}
      {/* </S.ButtonsContainer> */}
    </S.Background>
  )
};

export default MyPageQuestion;