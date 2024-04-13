import React from 'react';
import ThreeButtons from '../../components/ThreeButtons/ThreeButtons';
import BasicSearch from '../../components/search/BasicSearch';
import S from './style.js'
import { NavLink } from 'react-router-dom';


import Image1 from "../../pages/attractions/images/Lotteworld/at1.jpg"
import Image2 from "../../pages/attractions/images/Lotteworld/at2.jpg"
import Image3 from "../../pages/attractions/images/Lotteworld/at3.jpg"
import Image4 from "../../pages/attractions/images/Lotteworld/at4.jpg"
import Image5 from "../../pages/attractions/images/Lotteworld/at5.jpg"
import Image6 from "../../pages/attractions/images/Lotteworld/at6.jpg"
import Image7 from "../../pages/attractions/images/Lotteworld/at7.jpg"
import Image8 from "../../pages/attractions/images/Lotteworld/at8.jpg"
import Image9 from "../../pages/attractions/images/Lotteworld/at9.jpg"
import Image10 from "../../pages/attractions/images/Lotteworld/at10.jpg"
import Image11 from "../../pages/attractions/images/Lotteworld/at11.jpg"
import Image12 from "../../pages/attractions/images/Lotteworld/at12.jpg"
import Image13 from "../../pages/attractions/images/Lotteworld/at13.jpg"
import Image14 from "../../pages/attractions/images/Lotteworld/at14.jpg"
import Image15 from "../../pages/attractions/images/Lotteworld/at15.jpg"
import Image16 from "../../pages/attractions/images/Lotteworld/at16.jpg"
import Image17 from "../../pages/attractions/images/Lotteworld/at17.jpg"
import Image18 from "../../pages/attractions/images/Lotteworld/at18.jpg"
import Image19 from "../../pages/attractions/images/Lotteworld/at19.jpg"
import Image20 from "../../pages/attractions/images/Lotteworld/at20.jpg"
import Image21 from "../../pages/attractions/images/Lotteworld/at21.jpg"
import Image22 from "../../pages/attractions/images/Lotteworld/at22.jpg"
import Image23 from "../../pages/attractions/images/Lotteworld/at23.jpg"
import Image24 from "../../pages/attractions/images/Lotteworld/at24.jpg"
import Image25 from "../../pages/attractions/images/Lotteworld/at25.jpg"
import Image26 from "../../pages/attractions/images/Lotteworld/at26.jpg"
import Image27 from "../../pages/attractions/images/Lotteworld/at27.jpg"
import Image28 from "../../pages/attractions/images/Lotteworld/at28.jpg"
import Image29 from "../../pages/attractions/images/Lotteworld/at29.jpg"
import Image30 from "../../pages/attractions/images/Lotteworld/at30.jpg"
import Image31 from "../../pages/attractions/images/Lotteworld/at31.jpg"
import Image32 from "../../pages/attractions/images/Lotteworld/at32.jpg"
import Image33 from "../../pages/attractions/images/Lotteworld/at33.jpg"
import Image34 from "../../pages/attractions/images/Lotteworld/at34.jpg"
import Image35 from "../../pages/attractions/images/Lotteworld/at35.jpg"
import Image36 from "../../pages/attractions/images/Lotteworld/at36.jpg"



const LotteworldAttraction = () => {
 
  return (
    <div>
      <S.Threebutton>
        <ThreeButtons />
       </S.Threebutton>
       <S.search className='searchbar'>
       <BasicSearch  shape={"default"} variant={"main"} size={"default"} />
       </S.search>
      
       <S.gridContainer>

        <S.ImageWrapper>
          <S.gridItem>       
            <NavLink to={"/attraction/lotteworld/explain"}>  
            <S.Image src={Image1} alt="롯데월드 어트랙션1" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>슬릭스튜디오</p>
            <p>어드벤처4층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworld/explain"}>  
            <S.Image src={Image2} alt="롯데월드 어트랙션2" /> 
            </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>배틀그라운드 월드 에이전트</p>
            <p>매직 아일랜드</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image3} alt="롯데월드 어트랙션3" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>카트라이더 레이싱월드</p>
            <p>어드벤처1층</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image4} alt="롯데월드 어트랙션4" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>월드 모노레일</p>
            <p>어드벤처3층</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image5} alt="롯데월드 어트랙션5" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'> 자이로드롭</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image6} alt="롯데월드 어트랙션6" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>자이로스윙</p>
            <p>매직아일랜드</p>
         </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem>
            <S.Image src={Image7} alt="롯데월드 어트랙션7" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>자이로스핀</p>
            <p>매직아일랜드</p></S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
            <S.Image src={Image8} alt="롯데월드 어트랙션8" /> 
          </S.gridItem>
          <S.Content>
            <p className='attName'>아트란티스</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain9"}>
            <S.Image src={Image9} alt="롯데월드 어트랙션9" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 혜성특급</p>
            <p>매직아일랜드</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain10"}>
            <S.Image src={Image10} alt="롯데월드 어트랙션10" /> 
           </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>번지드롭</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain11"}>
            <S.Image src={Image11} alt="롯데월드 어트랙션11" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>회전그네</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain12"}>
            <S.Image src={Image12} alt="롯데월드 어트랙션12" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 머킹의 회전목마</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain13"}>
            <S.Image src={Image13} alt="롯데월드 어트랙션13" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>스페인 해적선</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain14"}>
            <S.Image src={Image14} alt="롯데월드 어트랙션14" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>신밧드의 모험</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain15"}>
            <S.Image src={Image15} alt="롯데월드 어트랙션15" /> 
         </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>회전목마</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain16"}>
            <S.Image src={Image16} alt="롯데월드 어트랙션16" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>후룸라이드</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem>
          <NavLink to={"/attraction/lotteworldattractionexplain17"}> 
            <S.Image src={Image17} alt="롯데월드 어트랙션17" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>회전바구니</p>
            <p>어드벤처1층</p></S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem>
          <NavLink to={"/attraction/lotteworldattractionexplain18"}> 
            <S.Image src={Image18} alt="롯데월드 어트랙션18" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>문보트 (유료) </p>
            <p>매직아일랜드</p></S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain19"}>
            <S.Image src={Image19} alt="롯데월드 어트랙션19" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 드래곤 와일드슈팅</p>
            <p>어드벤처1층</p>
         </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain20"}>
            <S.Image src={Image20} alt="롯데월드 어트랙션20" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>플라이벤처</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem>
          <NavLink to={"/attraction/lotteworldattractionexplain21"}> 
            <S.Image src={Image21} alt="롯데월드 어트랙션21" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>황야의 무법자</p>
            <p>어드벤처1층</p> 
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain22"}>
            <S.Image src={Image22} alt="롯데월드 어트랙션22" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>후렌치레볼루션</p>
            <p>어드벤처2층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem>
          <NavLink to={"/attraction/lotteworldattractionexplain23"}> 
            <S.Image src={Image23} alt="롯데월드 어트랙션23" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>범퍼카 (어드벤처) </p>
            <p>어드벤처2층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain24"}>
            <S.Image src={Image24} alt="롯데월드 어트랙션24" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>어크로스다크</p>
            <p>어드벤처4층</p>
           </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain25"}>
            <S.Image src={Image25} alt="롯데월드 어트랙션25" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>파라오의 분노</p>
            <p>어드벤처4층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain26"}>
            <S.Image src={Image26} alt="롯데월드 어트랙션26" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>풍선비행</p>
            <p>어드벤처4층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain27"}>
            <S.Image src={Image27} alt="롯데월드 어트랙션27" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>로티트레인</p>
            <p>어드벤처1층</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain28"}>
            <S.Image src={Image28} alt="롯데월드 어트랙션28" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 키즈토리아</p>
            <p>어드벤처1층</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain29"}>
            <S.Image src={Image29} alt="롯데월드 어트랙션29" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>쁘띠빵빵</p>
            <p>매직아일랜드</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain30"}>
            <S.Image src={Image30} alt="롯데월드 어트랙션30" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>환타지드림</p>
            <p>매직아일랜드</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain31"}>
            <S.Image src={Image31} alt="롯데월드 어트랙션31" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>언더씨킹덤</p>
            <p>키디존</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain32"}>
            <S.Image src={Image32} alt="롯데월드 어트랙션32" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>어린이 범퍼카</p>
            <p>키디존</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain33"}>
            <S.Image src={Image33} alt="롯데월드 어트랙션33" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>점핑피쉬</p>
            <p>키디존</p>
            </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain34"}>
            <S.Image src={Image34} alt="롯데월드 어트랙션34" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'> 유레카</p>
            <p>키디존</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain35"}>
            <S.Image src={Image35} alt="롯데월드 어트랙션35" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>햇님달님</p> 
            <p>키디존</p>
          </S.Content>
          </S.ImageWrapper>

          <S.ImageWrapper>
          <S.gridItem> 
          <NavLink to={"/attraction/lotteworldattractionexplain36"}>
            <S.Image src={Image36} alt="롯데월드 어트랙션36" /> 
          </NavLink>
          </S.gridItem>
          <S.Content>
            <p className='attName'>스윙팡팡</p>
            <p>키디존</p>
          </S.Content>
          </S.ImageWrapper>
          

        
      </S.gridContainer>


    </div>
  );
};

export default LotteworldAttraction;
// export const attractionId1 = "슬릭스튜디오";

