
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './style.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton.jsx';
import {faMartiniGlass,faHeartPulse, faPersonPregnant,faWheelchair ,faCircleExclamation ,faBan} from '@fortawesome/free-solid-svg-icons'


const LotteworldAttractionExplain = () => {
    const { id } = useParams(); 
    const [attractions, setAttractions] = useState({});

    useEffect(() => {
        const fetchAttractionDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8000/attraction/lotteworld/explain/${id}`, {
                    method: 'GET',
                    // credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                setAttractions(data);
                console.log(data);

            } catch (error) {
                console.error("Fetching attraction explain failed:", error);
            }
        };
        fetchAttractionDetail();
    }, []);

    if (!attractions) {
        return <div>Loading...</div>;
    }

    return (
   
            
   <S.ExplainWrapper>
     <S.ExplainH1>{attractions.title}</S.ExplainH1>
     <S.ExplainDescription>{attractions.description}</S.ExplainDescription>
     <S.ExplainImage src={`${process.env.PUBLIC_URL}/AttractionsImage/Lotteworld/at${attractions.id}.jpg`} alt="attraction" />

         <S.IconWrapper>
             <div>
                 <img src='/AttractionsImage/at_icon1.png' alt='#' />
                 <S.Span> 탑승인원 </S.Span> 
                 <p>{attractions.people}</p>
             </div>
             <div>
                 <img src='/AttractionsImage/at_icon2.png' alt='#' />
                 <S.Span>이용 정보</S.Span>
                 <p>{attractions.height}</p>
             </div>
         </S.IconWrapper>

         <S.BigContainer>
            <S.Limit > 
              <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>  탑승 제한
            </S.Limit>
          <S.LimitWrapper>
             <S.IconContainer>
                 <FontAwesomeIcon icon={faMartiniGlass} style={{fontSize:"100px"}} color='#1FB1D9'/> 
                 <S.IconText>음주</S.IconText>
                 </S.IconContainer>
                 <S.IconContainer>
                 <FontAwesomeIcon icon={faHeartPulse} style={{fontSize:"100px"}} color='#1FB1D9'/>
                 <S.IconText>심장질환</S.IconText>
                 </S.IconContainer>
                 <S.IconContainer>
                <FontAwesomeIcon icon={faPersonPregnant} style={{fontSize:"100px"}} color='#1FB1D9'/>
                 <S.IconText>임산부</S.IconText>
                 </S.IconContainer>
                 <S.IconContainer>
                 <FontAwesomeIcon icon={faWheelchair} style={{fontSize:"100px"}} color='#1FB1D9'/>
                 <S.IconText>휠체어</S.IconText>
                 </S.IconContainer>
           </S.LimitWrapper>
         </S.BigContainer>

         
       <S.Notice> 
          <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> 유의사항
       </S.Notice>
         <S.NoticeMessage>
            <p>마감 시간과 입장 가능 시간이 다를 수 있으니 양지해 주시기 바랍니다.</p>
        </S.NoticeMessage>
           
        <S.ButtonContainer>
            <NavLink to ="/attraction/lotteworld">
            <BasicButton shape={"default"} variant={"main"} size={"medium"} color={"white"} >
                뒤로가기
            </BasicButton>
           </NavLink>
       </S.ButtonContainer>
       
   </S.ExplainWrapper>
    );
};

export default LotteworldAttractionExplain;


