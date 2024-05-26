import React, { useEffect, useState } from 'react';
import S from './style.js';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const GiftshopExplain = () => {
  const [ searchParams ] = useSearchParams();
  const itemId = searchParams.get('itemId');
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [mainProduct, setMainProduct] = useState("");
  const [time, setTime] = useState("");
  const [guide, setGuide] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const getGiftshop = async () => {
    const response = await fetch(`http://localhost:8000/giftshop/find/?giftshopId=${itemId}`);
    const data = await response.json();
    return await data;
  }

  const getGiftshopExplain = async () => {
    const response = await fetch(`http://localhost:8000/giftshopExplain/findInfo?giftshopId=${itemId}`);
    const data = await response.json();
    return await data;
  }

  useEffect(()=>{
    getGiftshop()
    .then((data)=>{
      if(data){
        const {name, company, location} = data;
        setTitle(name);
        setCompany(company);
        setLocation(location);
      }
    });
    getGiftshopExplain()
    .then((data)=>{
      if(data){
        const {img, main_product, time, guide, phone_num} = data;
        setImg(img);
        setMainProduct(main_product);
        setTime(time);
        setGuide(guide);
        setPhoneNum(phone_num)
      }
      // console.log(data);
    });
    
  },[]);

  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>{title}</S.Header1>
        <S.ExplainGrid>
          <S.ItemWrapper>
            <S.ItemImg imgsrc={img}></S.ItemImg>
          </S.ItemWrapper>
          <S.DescriptionFlex>
            {
              mainProduct && (
                <S.DescriptionItem>
                  <S.IconWrapper>
                    <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                  </S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>주요상품</div>
                    <div>{mainProduct}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
            {
              location && (
                <S.DescriptionItem>
                  <S.IconWrapper>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                  </S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>위치</div>
                    <div>{location}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
            {
              time && (
                <S.DescriptionItem>
                  <S.IconWrapper>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  </S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>영업시간</div>
                    <div>{time}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
            {
              phoneNum && (
                <S.DescriptionItem>
                  <S.IconWrapper>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </S.IconWrapper>
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
                  <S.IconWrapper>
                    <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                  </S.IconWrapper>
                  <S.DescriptionWrapper>
                    <div className='semibold'>이용안내</div>
                    <div>{guide}</div>
                  </S.DescriptionWrapper>
                </S.DescriptionItem>
              )
            }
          </S.DescriptionFlex>
        </S.ExplainGrid>
        <S.BtnConatiner>
          <Link to={`/giftshop/${company}`}>목록으로</Link>
        </S.BtnConatiner>
      </S.Container>
    </div>
  );
};

export default GiftshopExplain;