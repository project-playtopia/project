import React, { useEffect, useState } from 'react';
import S from './style.js';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faMobileScreenButton, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';

const FnbExplain = () => {
  const [ searchParams ] = useSearchParams();
  const itemId = searchParams.get('itemId');
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [img, setImg] = useState("");
  const [menu, setMenu] = useState("");
  const [time, setTime] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [guide, setGuide] = useState("");
  

  const getFnb = async () => {
    const response = await fetch(`http://localhost:8000/fnb/find/?fnbId=${itemId}`);
    const data = await response.json();
    console.log(data);  
    return data;
  }

  const getFnbExplain = async () => {
    const response = await fetch(`http://localhost:8000/fnbExplain/?fnbId=${itemId}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(()=>{
    getFnb()
    .then((data)=>{
      if(data){
        const {name, company} = data;
        setTitle(name);
        setCompany(company);
      }
    });
    getFnbExplain()
    .then((data)=>{
      if(data){
        const { img, menu, time, phone_num, guide } = data;
        setImg(img);
        setMenu(menu);
        setTime(time);
        setPhoneNum(phone_num);
        setGuide(guide);
      }
    })
  }, [])

  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>{title}</S.Header1>
        <S.FnbExplainGrid>
          <S.ItemWrapper>
            <S.ItemImg imgsrc={img}></S.ItemImg>
          </S.ItemWrapper>
          <S.DescriptionFlex>
            <S.DescriptionItem>
              <S.IconWrapper><FontAwesomeIcon icon={faUtensils} /></S.IconWrapper>
              <S.DescriptionWrapper>
                <div className='semibold'>대표메뉴</div>
                <div>{menu}</div>
              </S.DescriptionWrapper>
            </S.DescriptionItem>
            <S.DescriptionItem>
              <S.IconWrapper><FontAwesomeIcon icon={faClock} /></S.IconWrapper>
              <S.DescriptionWrapper>
                <div className='semibold'>영업시간</div>
                <div>{time}</div>
              </S.DescriptionWrapper>
            </S.DescriptionItem>
            {
              phoneNum && (
                <S.DescriptionItem>
                  <S.IconWrapper><FontAwesomeIcon icon={faMobileScreenButton} /></S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>연락처</div>
                    <div>{phoneNum}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
            {
              guide && (
                <S.DescriptionItem>
                  <S.IconWrapper><FontAwesomeIcon icon={faClipboardList} /></S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>안내사항</div>
                    <div>{guide}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
            
          </S.DescriptionFlex>
        </S.FnbExplainGrid>
        <S.BtnConatiner>
          <Link to={`/fnb/${company}`}>목록으로</Link>
        </S.BtnConatiner>
      </S.Container>
    </div>
  );
};

export default FnbExplain;