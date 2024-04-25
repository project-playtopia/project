import React from 'react';
import ThreeButtons from '../../components/ThreeButtons/ThreeButtons.jsx';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import S from './style.js'

import Image1 from "../../pages/attractions/images/Everland/at1.jpg"
import Image2 from "../../pages/attractions/images/Everland/at2.jpg"
import Image3 from "../../pages/attractions/images/Everland/at3.jpg"
import Image4 from "../../pages/attractions/images/Everland/at4.jpg"
import Image5 from "../../pages/attractions/images/Everland/at5.jpg"
import Image6 from "../../pages/attractions/images/Everland/at6.jpg"
import Image7 from "../../pages/attractions/images/Everland/at7.jpg"
import Image8 from "../../pages/attractions/images/Everland/at8.jpg"
import Image9 from "../../pages/attractions/images/Everland/at9.jpg"
import Image10 from "../../pages/attractions/images/Everland/at10.jpg"
import Image11 from "../../pages/attractions/images/Everland/at11.jpg"
import Image12 from "../../pages/attractions/images/Everland/at12.jpg"
import Image13 from "../../pages/attractions/images/Everland/at13.jpg"
import Image14 from "../../pages/attractions/images/Everland/at14.jpg"
import Image15 from "../../pages/attractions/images/Everland/at15.jpg"
import Image16 from "../../pages/attractions/images/Everland/at16.jpg"
import Image17 from "../../pages/attractions/images/Everland/at17.jpg"
import Image18 from "../../pages/attractions/images/Everland/at18.jpg"
import Image19 from "../../pages/attractions/images/Everland/at19.jpg"
import Image20 from "../../pages/attractions/images/Everland/at20.jpg"
import Image21 from "../../pages/attractions/images/Everland/at21.jpg"
import Image22 from "../../pages/attractions/images/Everland/at22.jpg"
import Image23 from "../../pages/attractions/images/Everland/at23.jpg"
import Image24 from "../../pages/attractions/images/Everland/at24.jpg"
import Image25 from "../../pages/attractions/images/Everland/at25.jpg"
import Image26 from "../../pages/attractions/images/Everland/at26.jpg"
import Image27 from "../../pages/attractions/images/Everland/at27.jpg"
import Image28 from "../../pages/attractions/images/Everland/at28.jpg"
import Image29 from "../../pages/attractions/images/Everland/at29.jpg"
import Image30 from "../../pages/attractions/images/Everland/at30.jpg"
import Image31 from "../../pages/attractions/images/Everland/at31.jpg"
import Image32 from "../../pages/attractions/images/Everland/at32.jpg"
import Image33 from "../../pages/attractions/images/Everland/at33.jpg"
import Image34 from "../../pages/attractions/images/Everland/at34.jpg"
import Image35 from "../../pages/attractions/images/Everland/at35.jpg"
import Image36 from "../../pages/attractions/images/Everland/at36.jpg"
import { NavLink } from 'react-router-dom';


const EverlandAttraction = () => {
  return (

    // alt = 경로 숫자 맞춰주기
    // NavLink 해야됨

    <div>
      <S.Threebutton >
        <ThreeButtons/>
       </S.Threebutton>
       <S.search className='searchbar'>
        <BasicSearch  shape={"default"} variant={"main"} size={"default"} />
       </S.search>

       <S.gridContainer>  

        <S.ImageWrapper>
          <S.gridItem> 
            <NavLink to={`/attraction/everland/explain/${1}`}>
            <S.Image src={Image1} alt="에버랜드 어트랙션1" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 아마존 익스프레스</p>
            <p>주토피아</p>
         </S.Content>
          </S.ImageWrapper>

      
          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${2}`}>
            <S.Image src={Image2} alt="에버랜드 어트랙션2" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>썬더 폴스</p>
            <p>매직랜드</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${3}`}>
            <S.Image src={Image3} alt="에버랜드 어트랙션3" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 롤링 엑스트레인</p>
            <p>아메리칸 어드벤처</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${4}`}>
            <S.Image src={Image4} alt="에버랜드 어트랙션4" /> 
            </NavLink>
          </S.gridItem>
           <S.Content>
            <p className='attName'> 허리케인</p>
            <p> 아메리칸 어드벤처</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${5}`}>
            <S.Image src={Image5} alt="에버랜드 어트랙션5" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 키즈 빌리지</p>
            <p>매직랜드</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${6}`}>
            <S.Image src={Image6} alt="에버랜드 어트랙션6" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>매직 쿠키 하우스</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${7}`}>
            <S.Image src={Image7} alt="에버랜드 어트랙션7" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 로얄 쥬빌리 캐로셀</p>
            <p>유러피안 어드벤처</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${8}`}>
            <S.Image src={Image8} alt="에버랜드 어트랙션8" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>자동차왕국</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${9}`}>
            <S.Image src={Image9} alt="에버랜드 어트랙션9" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>플래쉬 팡팡</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

         <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${10}`}>
            <S.Image src={Image10} alt="에버랜드 어트랙션10" />
            </NavLink> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>피터팬</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper> 

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${11}`}>
            <S.Image src={Image11} alt="에버랜드 어트랙션11" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>나는 코끼리</p>
            <p>매직랜드</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/everland/explain/${12}`}>
            <S.Image src={Image12} alt="에버랜드 어트랙션12" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>범퍼카</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image13} alt="에버랜드 어트랙션13" /> 
          </S.gridItem>
          <S.Content>
            <p className ='attName'> 붕붕카</p>
            <p>매직랜드</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image14} alt="에버랜드 어트랙션14" /> 
          </S.gridItem>
          <S.Content>
            <p className ='attName'> 매직 스윙</p>
            <p>매직랜드</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image15} alt="에버랜드 어트랙션15" /> 
          </S.gridItem>
          <S.Content>
            <p className ='attName'> 비룡 열차</p>
            <p>매직랜드</p>        
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image16} alt="에버랜드 어트랙션16" /> 
          </S.gridItem>
          <S.Content>
            <p className ='attName'>스푸키 펀 하우스</p>
            <p>매직랜드</p>           
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image17} alt="에버랜드 어트랙션17" /> 
          </S.gridItem>
          <S.Content>
            <p className ='attName'> 레이싱 코스터</p>
            <p>매직랜드</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image18} alt="에버랜드 어트랙션18" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 볼 하우스</p>
            <p>매직랜드</p>        
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image19} alt="에버랜드 어트랙션19" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 릴리 댄스</p>
            <p>매직랜드</p>           
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image20} alt="에버랜드 어트랙션20" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>플라잉 레스큐</p>
            <p>매직랜드</p>           
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image21} alt="에버랜드 어트랙션21" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 스페이스 투어 (4D어트랙션)</p>
            <p>아메리칸 어드벤처</p>      
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image22} alt="에버랜드 어트랙션22" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 슈팅고스트</p>
            <p>매직랜드</p>       
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image23} alt="에버랜드 어트랙션23" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>T 익스프레스</p>
            <p>유러피안 어드벤처</p>      
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image24} alt="에버랜드 어트랙션24" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>사파리월드</p>
            <p>주토피아</p>           
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image25} alt="에버랜드 어트랙션25" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>로스트밸리</p>
            <p>주토피아</p>       
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image26} alt="에버랜드 어트랙션26" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 판다월드</p>
            <p>주토피아</p>           
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image27} alt="에버랜드 어트랙션27" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>콜럼버스 대탐험</p>
            <p>아메리칸 어드벤처</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image28} alt="에버랜드 어트랙션28" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>더블 락스핀</p>
            <p>아메리칸 어드벤처</p>           
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image29} alt="에버랜드 어트랙션29" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 렛츠 트위스트</p>
            <p>아메리칸 어드벤처</p>           
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image30} alt="에버랜드 어트랙션30" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>시크릿쥬쥬 비행기</p>
            <p>매직랜드</p>          
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image31} alt="에버랜드 어트랙션31" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>로보트카</p>
            <p>매직랜드</p>           
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image32} alt="에버랜드 어트랙션32" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>스카이 댄싱 </p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image33} alt="에버랜드 어트랙션33" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>우주 전투기</p>
            <p>매직랜드</p>           
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image34} alt="에버랜드 어트랙션34" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>플레이 야드</p>
            <p>매직랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image35} alt="에버랜드 어트랙션35" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 페스티벌 트레인</p>
            <p>유러피안 어드벤처</p>           
           </S.Content>
          </S.ImageWrapper>
          <S.ImageWrapper>

          <S.gridItem> 
            <S.Image src={Image36} alt="에버랜드 어트랙션36" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 레니의 마법학교</p>
            <p>매직랜드</p>           
           </S.Content>
          </S.ImageWrapper>

          </S.gridContainer>

  
    
    </div>

  );
};

export default EverlandAttraction;