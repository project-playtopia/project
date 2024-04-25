import React from 'react';
import ThreeButtons from '../../components/ThreeButtons/ThreeButtons.jsx';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import S from './style.js'
import { NavLink } from 'react-router-dom';

import Image1 from "../../pages/attractions/images/Seoulland/at1.jpg";
import Image2 from "../../pages/attractions/images/Seoulland/at2.jpg";
import Image3 from "../../pages/attractions/images/Seoulland/at3.jpg";
import Image4 from "../../pages/attractions/images/Seoulland/at4.jpg";
import Image5 from "../../pages/attractions/images/Seoulland/at5.jpg";
import Image6 from "../../pages/attractions/images/Seoulland/at6.jpg";
import Image7 from "../../pages/attractions/images/Seoulland/at7.jpg";
import Image8 from "../../pages/attractions/images/Seoulland/at8.jpg";
import Image9 from "../../pages/attractions/images/Seoulland/at9.jpg";
import Image10 from "../../pages/attractions/images/Seoulland/at10.jpg";
import Image11 from "../../pages/attractions/images/Seoulland/at11.jpg";
import Image12 from "../../pages/attractions/images/Seoulland/at12.jpg";
import Image13 from "../../pages/attractions/images/Seoulland/at13.jpg";
import Image14 from "../../pages/attractions/images/Seoulland/at14.jpg";
import Image15 from "../../pages/attractions/images/Seoulland/at15.jpg";
import Image16 from "../../pages/attractions/images/Seoulland/at16.jpg";
import Image17 from "../../pages/attractions/images/Seoulland/at17.jpg";
import Image18 from "../../pages/attractions/images/Seoulland/at18.jpg";
import Image19 from "../../pages/attractions/images/Seoulland/at19.jpg";
import Image20 from "../../pages/attractions/images/Seoulland/at20.jpg";
import Image21 from "../../pages/attractions/images/Seoulland/at21.jpg";
import Image22 from "../../pages/attractions/images/Seoulland/at22.jpg";
import Image23 from "../../pages/attractions/images/Seoulland/at23.jpg";
import Image24 from "../../pages/attractions/images/Seoulland/at24.jpg";
import Image25 from "../../pages/attractions/images/Seoulland/at25.jpg";
import Image26 from "../../pages/attractions/images/Seoulland/at26.jpg";
import Image27 from "../../pages/attractions/images/Seoulland/at27.jpg";
import Image28 from "../../pages/attractions/images/Seoulland/at28.jpg";
import Image29 from "../../pages/attractions/images/Seoulland/at29.jpg";
import Image30 from "../../pages/attractions/images/Seoulland/at30.jpg";
import Image31 from "../../pages/attractions/images/Seoulland/at31.jpg";
import Image32 from "../../pages/attractions/images/Seoulland/at32.jpg";
import Image33 from "../../pages/attractions/images/Seoulland/at33.jpg";
import Image34 from "../../pages/attractions/images/Seoulland/at34.jpg";
import Image35 from "../../pages/attractions/images/Seoulland/at35.jpg";
import Image36 from "../../pages/attractions/images/Seoulland/at36.jpg";

const SeoullandAtrraction = () => {
  return (

    <div>
   <S.Threebutton>
      <ThreeButtons/>
    </S.Threebutton>
    <S.search className='searchbar'>
    <BasicSearch  shape={"default"} variant={"main"} size={"default"} />
    </S.search>

    <S.gridContainer>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${1}`}>
            <S.Image src={Image1} alt="서울랜드 어트랙션1" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>둥실 비행선</p>
            <p>미래의 나라</p>
            </S.Content>
     </S.ImageWrapper>

      <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${2}`}>
            <S.Image src={Image2} alt="서울랜드 어트랙션2" />
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>빅 회전목마</p>
            <p>캐릭터 타운</p>
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${3}`}>
            <S.Image src={Image3} alt="서울랜드 어트랙션3" />
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>월드컵</p>
            <p>캐릭터 타운</p>
            
            </S.Content>
     </S.ImageWrapper>

     
     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${4}`}>
            <S.Image src={Image4} alt="서울랜드 어트랙션4" />
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 도깨비 바람</p>
            <p>삼천리 동산</p>
          </S.Content>
     </S.ImageWrapper>

     
     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${5}`}>
            <S.Image src={Image5} alt="서울랜드 어트랙션5" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>쥬라기 랜드</p>
            <p>캐릭터 타운</p>           
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${6}`}>
            <S.Image src={Image6} alt="서울랜드 어트랙션6" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>킹바이킹</p>
            <p>모험의 나라</p>          
         </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${7}`}>
            <S.Image src={Image7} alt="서울랜드 어트랙션7" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>블랙홀 2000</p>
            <p>미래의 나라</p>
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${8}`}>
            <S.Image src={Image8} alt="서울랜드 어트랙션8" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>라바 트위스터</p>
            <p>캐릭터 타운</p>
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${9}`}>
            <S.Image src={Image9} alt="서울랜드 어트랙션9" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>은하열차 888</p>
            <p>미래의 나라</p>
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${10}`}>
            <S.Image src={Image10} alt="서울랜드 어트랙션10" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>베스트 키즈</p>
            <p>삼천리 동산</p>
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${11}`}>
            <S.Image src={Image11} alt="서울랜드 어트랙션11" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>시티패럿</p>
            <p>세계의 광장</p>           
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={`/attraction/seoulland/explain/${12}`}>
            <S.Image src={Image12} alt="서울랜드 어트랙션12" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 급류타기</p>
            <p>모험의 나라</p>           
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image13} alt="서울랜드 어트랙션13" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>  티키톡 열차</p>
            <p>캐릭터 타운</p>        
          </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image14} alt="서울랜드 어트랙션14" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>출동 ! 슈퍼윙스</p>
            <p>미래의 나라</p>            
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image15} alt="서울랜드 어트랙션15" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>브루미즈 동산</p>
            <p>캐릭터 타운</p>         
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image16} alt="서울랜드 어트랙션16" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>앨리스 원더하우스</p>
            <p>캐릭터 타운</p>            
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image17} alt="서울랜드 어트랙션17" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>  터닝메카드 레이싱</p>
            <p>캐릭터 타운</p>           
          </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image18} alt="서울랜드 어트랙션18" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 피터팬</p>
            <p>캐릭터 타운</p>           
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image19} alt="롯데월드 어트랙션19" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>엑스 플라이어</p>
            <p>미래의 나라</p>           
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image20} alt="서울랜드 어트랙션20" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>  알포스윙</p>
            <p>캐릭터 타운</p>           
          </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image21} alt="서울랜드 어트랙션21" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 4D 깜짝모험관</p>
            <p>미래의 나라</p>          
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image22} alt="서울랜드 어트랙션22" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>달나라 열차</p>
            <p>미래의 나라</p>            
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image23} alt="서울랜드 어트랙션23" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 니나노 고카트</p>
            <p>모험의 나라</p>            
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image24} alt="서울랜드 어트랙션24" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>  타임머신 5D 360</p>
            <p>미래의 나라</p>         
          </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image25} alt="서울랜드 어트랙션25" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>터닝메카드<br/> 고!범퍼카</p>
            <p>캐릭터 타운</p>          
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image26} alt="서울랜드 어트랙션26" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 록카페</p>
            <p>미래의 나라</p>          
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image27} alt="서울랜드 어트랙션27" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 샷드롭</p>
            <p>미래의 나라</p>         
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image28} alt="서울랜드 어트랙션28" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>깜부 비행기</p>
            <p>캐릭터 타운</p>         
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image29} alt="서울랜드 어트랙션29" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>스카이 엑스</p>
            <p>미래의 나라</p>         
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image30} alt="서울랜드 어트랙션30" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 뭉게공항 액션존</p>
            <p>캐릭터 타운</p>           
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image31} alt="서울랜드 어트랙션31" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>개구리 만세</p>
            <p>미래의 나라</p>         
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image32} alt="서울랜드 어트랙션32" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 미니 바이킹</p>
            <p>미래의 나라</p>        
           </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image33} alt="서울랜드 어트랙션33" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>해적소굴</p>
            <p>모험의 나라</p>         
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image34} alt="서울랜드 어트랙션34" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>도레미 악단</p>
            <p>캐릭터 타운</p>        
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image35} alt="서울랜드 어트랙션35" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>구름빵</p>
            <p>캐릭터 타운</p>       
            </S.Content>
     </S.ImageWrapper>

     <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image36} alt="서울랜드 어트랙션36" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>춤추는 요술집</p>
            <p>미래의 나라</p>      
            </S.Content>
     </S.ImageWrapper>


     






    </S.gridContainer>





    </div>
  );
};

export default SeoullandAtrraction;