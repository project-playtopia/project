import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate} from 'react-router-dom';

const SignIn = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  const {register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode: "onChange"})
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Container>
        <S.H1>로그인</S.H1>
        <S.P>회원 아이디와 비밀번호로 로그인하세요</S.P>
        <form onSubmit={handleSubmit((data) => {
            console.log(data, "데이터 보내짐")
            fetch('http://localhost:8000/getuser/signIn', {
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
            })

            .then(res => {
              if(res.ok) {
                return res.json();
              } else {
                return res.json().then(err => {
                  throw new Error(err.message || "로그인 처리 중 문제가 발생했습니다.");
                });
              }
            })
            .then(res => {
              console.log(res)
              alert("로그인 성공")
              navigate('/')
            })
            .catch(err => {
              console.error("Error occurred during login request", err);
              alert(err.message || "로그인 처리 중 문제가 발생했습니다.");
            });
  })}
  >
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
          </form>
      </S.Container>
    </S.Background>
  );
};

export default SignIn;