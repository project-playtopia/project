import React, { useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const SearchId = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const findUserId = async () => {
    try {
      const formattedPhoneNumber = phoneNumber.replace(/-/g, '');

      const response = await fetch('https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/searchid/findByPhone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phonenumber: formattedPhoneNumber }),
      });

      if (!response.ok) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }

      const data = await response.json();
      const maskedId = maskId(data.id);
      setUserId(maskedId);
      setError('');
    } catch (err) {
      setError(err.message);
      setUserId('');
    }
  };

  const maskId = (id) => {
    if (id.length <= 3) {
      return "***";
    } else {
      return id.substring(0, id.length - 3) + "***";
    }
  };

  return (
    <S.Background className='notosanskr'>
      <S.H1>아이디 찾기</S.H1>
      <S.Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="전화번호 입력 : 010-****-****"
      />
      <S.SubmitButton onClick={findUserId}>아이디 찾기</S.SubmitButton>
      {phoneNumber && (
        <>
          {(userId || error) && (
            <S.IdSearchContainer>
              <S.P>아이디 찾기 결과</S.P>
              {userId ? (
                <>
                  <S.ResultP>{userId}</S.ResultP>
                  <S.SubP>-개인정보보호를 위해 아이디 뒷자리는 ***로 표시됩니다.</S.SubP>
                </>
              ) : (
                <S.ResultP>{error}</S.ResultP>
              )}
            </S.IdSearchContainer>
          )}
          {userId && (
            <NavLink to={"/signIn"}>
                <S.LoginButton>로그인하러 가기</S.LoginButton>
            </NavLink>
          )}
        </>
      )}
    </S.Background>
  );
};

export default SearchId;
