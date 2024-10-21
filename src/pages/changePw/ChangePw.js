import React, { useState } from 'react';
import S from './style.js';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ChangePw = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const onSubmit = async (data) => {
    const { id, oldPassword, newPassword, confirmPassword } = data;


    if (newPassword !== confirmPassword) {
      alert('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch('https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/api/changePassword', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          oldPassword,
          newPassword,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); 
      } else {
        throw new Error(result.message); 
      }
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <S.Background className='notosanskr'>
      <S.H1>비밀번호 변경</S.H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.IdInputContainer>
        <S.Input {...register('id', { required: true })} placeholder="아이디" />
        {errors.id && <S.ErrorMessge>아이디를 입력해주세요.</S.ErrorMessge>}
        </S.IdInputContainer>
        <S.PasswordContainer>
          <S.PasswordInput {...register('oldPassword', { required: true })} type={isPasswordShown ? 'text' : 'password'} placeholder="기존 비밀번호" />
          <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
        </S.PasswordContainer>
        <S.PasswordContainer>
          <S.PasswordInput {...register('newPassword', { required: true })} type={isPasswordShown ? 'text' : 'password'} placeholder="새로운 비밀번호" />
          <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
        </S.PasswordContainer>
        <S.PasswordContainer>
          <S.PasswordInput {...register('confirmPassword', { required: true })} type={isPasswordShown ? 'text' : 'password'} placeholder="새로운 비밀번호 확인" />
          <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
        
        </S.PasswordContainer>
        <S.ButtonContainer>
        <S.SubmitButton type="submit">확인</S.SubmitButton>
      </S.ButtonContainer>
      </form>
    </S.Background>
  );
};

export default ChangePw;
