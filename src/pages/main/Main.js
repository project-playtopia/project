import React, { useState } from "react";
import S from "./style.js";
import LotteWorldImage from './mainImage/lotteworldmain2.jpg'
import EverlandImage from './mainImage/everlandmain5.jpg'
import SeoullandImage from './mainImage/seoullandmain.jpg'
import EverlandLogo from './mainImage/everlandlogo.png'
import LotteworldLogo from './mainImage/lotte_logo.png'
import SeoullandLogo from './mainImage/seoul_logo.png'
import { NavLink } from "react-router-dom";


const Main = () => {
  const [isHovered, setIsHovered] = useState({ lotteworld: false, everland: false, seoulland: false });
  return (
    <S.Background className='notosanskr'>
      <S.Main>
         <S.ImageContainer
          onMouseEnter={() => setIsHovered({ ...isHovered, lotteworld: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, lotteworld: false })}
        >
          <S.Image src={LotteWorldImage}/>
          <S.OverlayImage src={LotteworldLogo}/>
          {isHovered.lotteworld && (
            <S.buttonWrapper>
              <NavLink to={"/event/lotteworld"}>
                <button className="desktopbutton">
                  이벤트 확인하기
                </button>
                <S.MobileButtonFirst>
                    이벤트<br/>확인하기
                </S.MobileButtonFirst>
              </NavLink>
            </S.buttonWrapper>
          )}
        </S.ImageContainer >
        <S.ImageContainer 
        onMouseEnter={() => setIsHovered({ ...isHovered, everland: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, everland: false })}>
          <S.Image src={EverlandImage}/>
          <S.OverlayImage src={EverlandLogo}/>
          {isHovered.everland && (
            <S.buttonWrapper>
              <NavLink to={"/event/everland"}>
              <button className="desktopbutton">
                  이벤트 확인하기
              </button>
              <S.MobileButton>
                  이벤트<br/>확인하기
                </S.MobileButton>
              </NavLink>
            </S.buttonWrapper>
          )}
          
        </S.ImageContainer>
        <S.ImageContainer 
        onMouseEnter={() => setIsHovered({ ...isHovered, seoulland: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, seoulland: false })}>
          <S.Image src={SeoullandImage}/>
          <S.OverlayImage src={SeoullandLogo}/>
          {isHovered.seoulland && (
            <S.buttonWrapper>
              <NavLink to={"/event/seoulland"}>
                <button className="desktopbutton">
                  이벤트 확인하기
                </button>
                <S.MobileButton>
                    이벤트<br/>확인하기
                </S.MobileButton>
              </NavLink>
            </S.buttonWrapper>
          )}
        </S.ImageContainer>
      </S.Main>
    </S.Background>
  );
};

export default Main;

