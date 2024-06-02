import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate} from 'react-router-dom';
import { useUser } from '../myPage/UserContext.js';

const SignIn = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  const {register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode: "onChange"})
  const navigate = useNavigate();

  const { setUser } = useUser();

  return (
    <S.Background className='notosanskr'>
      <S.Container>
        <S.H1>로그인</S.H1>
        <S.P>회원 아이디와 비밀번호로 로그인하세요</S.P>
        <form onSubmit={handleSubmit(async (data) => { 
        console.log(data, "데이터 보내짐")
    try {
      const response = await fetch('http://localhost:8000/getuser/signIn', {
          method : 'POST',
          credentials : 'include',
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body : JSON.stringify({
              id : data.id,
              password : data.password
          })
      });

      if(response.ok) {
        const result = await response.json(); 
        setUser(result.user); 
        alert("로그인 성공");
        console.log(result.user)
        navigate('/');
      } else {
        const err = await response.json(); 
        throw new Error(err.message || "로그인 처리 중 문제가 발생했습니다.");
      }
    } catch (err) {
      console.error("Error occurred during login request", err);
      alert(err.message || "로그인 처리 중 문제가 발생했습니다.");
    }
})}>

        <S.IdInputContainer>
          <S.Input type="text" placeholder=" 아이디" id="id"
           {...register("id", {
            required : true
        })} />
        </S.IdInputContainer>
        <S.PasswordContainer>
          <S.PasswordInput type={isPasswordShown ? 'text' : 'password'} 
          placeholder=" 비밀번호 "
          id="password" 
          {...register("password", {
            required : true
        })}/>
           <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
        </S.PasswordContainer>
          <S.SubmitButton disabled={isSubmitting}>로그인</S.SubmitButton>
          <NavLink to={"/signUp"}>
            <S.SignInButton>회원가입</S.SignInButton>
          </NavLink>
          <S.LinksContainer>
              <NavLink to={"/searchId"}><p>아이디 찾기</p></NavLink>
              <NavLink to={"/changePassword"}><p>비밀번호 찾기</p></NavLink>
          </S.LinksContainer>
          </form>
      </S.Container>
      
    </S.Background>
  );
};

export default SignIn;