import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style.js';
import { useDispatch } from 'react-redux';
import { setPreviousUrl } from '../../modules/user.js';
import logoImage from './logo/logo.png'; 
import mobileImage from './logo/logo.png';
import logoWhite from './logo/logoWhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHorse, faCircleDollarToSlot,  faUtensils, faMapLocationDot, faPenToSquare, faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../myPage/UserContext.js';


const LayoutMain = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname + location.search;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showMain,setshowMain] = useState(false);
  const [showAttractionsMenu, setShowAttractionsMenu] = useState(false);
  const [showCostMenu, setShowCostMenu] = useState(false);
  const [showFnbMenu, setShowFnbMenu] = useState(false);
  const [showGuidemap, setshowGuidemap] = useState(false);
  const [showBoardMenu, setShowBoardMenu] = useState(false);
  const [showSignin, setshowSignin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);

  const { user ,setUser } = useUser();


  return (
    <S.Background className='notosanskr'>
      <S.Wrapper>
        <S.Main>
          <Outlet />
        </S.Main>
        {/* 모바일 nav */}
        <S.NavMobile active={isMenuOpen}>
        <S.NavMobileHeader>
          <S.IconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "35px" }} color='#1fb1d9'/>
           </S.IconWrapper>
           <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           <NavLink to={"/"}>
              <S.MobileImage src={mobileImage} alt="Logo"/>
           </NavLink>
           </div>
        </S.NavMobileHeader>
        {isMenuOpen && (
          <>
            <S.ProfileSection>
              <div>
              <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "50px" }}/>
              </div>
              <S.MobileAuthLink>
              <NavLink to={"/signIn"} className="sign">
                 <S.MobilesubP>로그인</S.MobilesubP>
              </NavLink>
              <NavLink to={"/signUp"} className="sign">
                 <S.MobilesubP>회원가입</S.MobilesubP>
              </NavLink>
              </S.MobileAuthLink>
            </S.ProfileSection>
            <div className={`main-item ${showAttractionsMenu ? 'active' : ''}`} 
          onClick={() => setShowAttractionsMenu(!showAttractionsMenu)}>
        <FontAwesomeIcon icon={faHorse} style={{ fontSize: "35px" }}/>
        <S.MobilemainP>즐길거리</S.MobilemainP>
        {showAttractionsMenu ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
      </div>
        {showAttractionsMenu && (
        <div className="sub-item active">
          <NavLink to={"/attraction/lotteworld"}>
            <S.MobilesubP>어트랙션</S.MobilesubP>
          </NavLink>
          <NavLink to={"/performance"}>
            <S.MobilesubP>공연정보</S.MobilesubP>
            </NavLink>
          <NavLink to={"/course/lotteworld"}>
            <S.MobilesubP>추천코스</S.MobilesubP>
          </NavLink>
        </div>
        )}
         <div className={`main-item ${showCostMenu ? 'active' : ''}`} 
        onClick={() => setShowCostMenu(!showCostMenu)}>
          <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ fontSize: "35px" }}/>
          <S.MobilemainP>요금정보</S.MobilemainP>
        {showCostMenu ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </div>
        {showCostMenu && (
        <div className="sub-item active">
            <NavLink to={"/basiccost/lotteworld"}>
              <S.MobilesubP>기본요금</S.MobilesubP>
            </NavLink>
            <NavLink to={"/benefit/lotteworld"}>
              <S.MobilesubP>
                이달의 혜택
              </S.MobilesubP>
            </NavLink>
            <NavLink to={"/yearcost/explain/lotteworld"}>
              <S.MobilesubP>
                연간회원권
              </S.MobilesubP>
            </NavLink>
          </div>
        )}
           <div className={`main-item ${showFnbMenu ? 'active' : ''}`} 
        onClick={() => setShowFnbMenu(!showFnbMenu)}>
        <FontAwesomeIcon icon={faUtensils} style={{ fontSize: "35px" }}/>
         <S.MobilemainP>FnB/상점</S.MobilemainP>
        {showFnbMenu ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </div>
        {showFnbMenu && (
        <div className="sub-item active">
            <NavLink to={"/fnb/lotteworld"}>
              <S.MobilesubP>FnB</S.MobilesubP>
            </NavLink>
            <NavLink to={"/giftshop/lotteworld"}>
              <S.MobilesubP>기프트샵</S.MobilesubP>
            </NavLink>
          </div>
        )}

        <div className={`main-item ${showGuidemap ? 'active' : ''}`} 
        onClick={() => setshowGuidemap(!showGuidemap)}>
        <FontAwesomeIcon icon={faMapLocationDot} style={{ fontSize: "35px" }}/>
        <NavLink to={"guidemap/lotteworld"}>
            <S.MobilemainP>가이드맵</S.MobilemainP>
        </NavLink>
      {showGuidemap ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </div>

        <div className={`main-item ${showBoardMenu ? 'active' : ''}`} 
        onClick={() => setShowBoardMenu(!showBoardMenu)}>
          <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: "35px" }}/>
          <S.MobilemainP>게시판</S.MobilemainP>
        {showBoardMenu ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </div>
        {showBoardMenu && (
        <div className="sub-item active">
            <NavLink to={"/event/lotteworld"}>
              <S.MobilesubP>
                이벤트
              </S.MobilesubP>
            </NavLink>
            <NavLink to={"qna/list"}>
              <S.MobilesubP>QnA</S.MobilesubP>
            </NavLink>
            <NavLink to={"/faq/lotteworld"}>
              <S.MobilesubP>FaQ</S.MobilesubP>
            </NavLink>
            <NavLink to ={"lostnfound/list/lotteworld"}>
              <S.MobilesubP>분실물</S.MobilesubP>
            </NavLink>
          </div>
        )}
          </>
        )}
        
    </S.NavMobile>

        {/* 데스크탑 nav */}
        <S.NavPc>
          <S.MenuItemWrapper onClick={()=>setshowMain(!showMain)}>
            <NavLink to={"/"}>
              <S.Image src={logoImage}/>
            </NavLink>
          </S.MenuItemWrapper>

          <S.MenuItemWrapper active={showAttractionsMenu} className="menu-item" 
          onClick={() => setShowAttractionsMenu(!showAttractionsMenu)}>
              <p className='main-item'>즐길거리</p>
          {setShowAttractionsMenu && (
              <S.SubMenuWrapper active={showAttractionsMenu}>
                <NavLink to={"/attraction/lotteworld"}>
                  <p>어트랙션</p>
                </NavLink>
                <NavLink to={"/performance"}>
                  <p>공연정보</p>
                </NavLink>
                <NavLink to={"/course/lotteworld"}>
                  <p>추천코스</p>
                </NavLink>
              </S.SubMenuWrapper> )}
            </S.MenuItemWrapper>

          <S.MenuItemWrapper active={showCostMenu} className="menu-item" 
          onClick={() => setShowCostMenu(!showCostMenu)}>
            <p className='main-item'>요금정보</p>
            {showCostMenu && (
              <S.SubMenuWrapper active={showCostMenu}>
                <NavLink to={"/basiccost/lotteworld"}>
                  <p>기본요금</p>
                </NavLink>
                <NavLink to={"/benefit/lotteworld"}>
                  <p>이달의 혜택</p>
                </NavLink>
                <NavLink to={"/yearcost/explain/lotteworld"}>
                <p>연간회원권</p>
                </NavLink>
              </S.SubMenuWrapper>
            )}
            </S.MenuItemWrapper>

          <S.MenuItemWrapper active = {showFnbMenu} className="menu-item" onClick={() => setShowFnbMenu(!showFnbMenu)}>
            <p className='main-item'>fnb/상점</p>
            {showFnbMenu && (
              <S.SubMenuWrapper active={showFnbMenu}>
                <NavLink to={"/fnb/lotteworld"}>
                <p>fnb</p>
                </NavLink>
                <NavLink to={"/giftshop/lotteworld"}>
                <p>기프트샵</p>
                </NavLink>
              </S.SubMenuWrapper>
            )}
          </S.MenuItemWrapper>

          <S.MenuItemWrapper className='menu-item' onClick={()=>setshowGuidemap(!showGuidemap)}>
            <NavLink to={"guidemap/lotteworld"}>
                  <p className='main-item'>가이드맵</p>
            </NavLink>
          </S.MenuItemWrapper>

          <S.MenuItemWrapper active = {showBoardMenu} className="menu-item" 
          onClick={() => setShowBoardMenu(!showBoardMenu)}>
            <p className='main-item'>게시판</p>
            {showBoardMenu && (
              <S.SubMenuWrapper active = {showBoardMenu}>
                <NavLink to={"/event/lotteworld"}>
                <p>이벤트</p>
                </NavLink>
                <NavLink to={"qna/list"}>
                  <p>QnA</p>
                </NavLink>
                <NavLink to={"faq/list"}>
                  <p>FaQ</p>
                </NavLink>
                <NavLink to={"lostnfound/list/lotteworld"}>
                  <p>분실물</p>
                </NavLink>
              </S.SubMenuWrapper>
            )}
          </S.MenuItemWrapper>

         {user ? ( 
            <>
              <S.MenuItemWrapper className="auth-item">
                <NavLink to={"/myPage"} className="authLink">
                  <p>마이페이지</p>
                </NavLink>
              </S.MenuItemWrapper>

              <S.MenuItemWrapper className="menu-item" onClick={()=>{
                 setUser(null); 
                 alert("로그아웃 되었습니다.");
              }}>
                <NavLink to={"/"} className="authLink">
                  <p>로그아웃</p>
                </NavLink>
              </S.MenuItemWrapper>
            </>
          ) : (
            <>
              <S.MenuItemWrapper className="auth-item" onClick={()=>{setshowSignin(!showSignin)}}>
                <NavLink to={"/signIn"} className="authLink">
                  <p>로그인</p>
                </NavLink>
              </S.MenuItemWrapper>

              <S.MenuItemWrapper className="menu-item" onClick={()=>{setshowSignup(!showSignup)}}>
                <NavLink to={"/signUp"} className="authLink">
                  <p>회원가입</p>
                </NavLink>
              </S.MenuItemWrapper>
            </>
          )}
        </S.NavPc>
        <S.Footer>
          <S.Image className = "footerlogo" src={logoWhite}/>
          <div className='footerbox'>
            <p className='maker'>Maker</p>
            <p className='email'>           
                snhyein2001@gmail.com <br/>
                charmmmn@gmail.com<br/>
                jungjune276@gmail.com <br/>
                parkminseo3123@gmail.com <br/>
            </p>
          </div>
        </S.Footer>
      </S.Wrapper>
    </S.Background>
  );
};

export default LayoutMain;