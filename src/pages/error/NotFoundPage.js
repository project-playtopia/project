import React from 'react';
import S from './style.js';
import logo from '../layout/logo/logo.png'
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <S.Background className='notosanskr'>
      <S.Image src={logo}/>
      <S.H1>페이지를 찾을 수 없습니다</S.H1>
      <NavLink to={"/"}>
        <S.Button>홈으로 돌아가기</S.Button>
      </NavLink>
    </S.Background>
  );
};

export default NotFoundPage;