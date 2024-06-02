import React from 'react';
import S from './style.js';
import logo from '../layout/logo/logo.png'
import { NavLink } from 'react-router-dom';

const SignupFinish = () => {
  return (
    <S.Background className='notosanskr'>
        <S.Image src={logo}/>
      <S.P>환영합니다! 회원가입이 완료되었습니다. <br/>
          이제 플레이토피아의 모든 서비스를 자유롭게 이용해보세요.</S.P>
      <NavLink to={"/signIn"}>
        <S.Button>로그인하러 가기</S.Button>
      </NavLink>
    </S.Background>
  );
};

export default SignupFinish;