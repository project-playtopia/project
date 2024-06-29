import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './newStyle.js';
import { useDispatch } from 'react-redux';
import { setPreviousUrl } from '../../modules/user.js';
import logoImage from './logo/logo.png'; 
import logoWhite from './logo/logoWhite.png'
import mobileImage from './logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHorse, faCircleDollarToSlot,  faUtensils, faMapLocationDot, faPenToSquare, faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../myPage/UserContext.js';

const LayoutMain = () => {

	const {user, setUser} = useUser();

	return (
		<S.Background className='notosanskr'>
			<>
				<Outlet />
			</>
			<S.NavBarWrapper>
				<S.MenuBurgerWrapper>
					<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
				</S.MenuBurgerWrapper>
				<Link to={"/"}>
					<S.LogoImgWrapper imgSrc={logoImage} />
				</Link>
				<S.NavMenuWrapper>
					<S.NavList>
						<S.NavListItem>
							즐길거리
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/attraction/lotteworld"}>어트랙션</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/performace"}>공연정보</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/course/lotteworld"}>추천코스</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
						</S.NavListItem>
            <S.NavListItem>
							요금정보
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/basiccost/lotteworld"}>기본요금</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/benefit/lotteworld"}>이달의 혜택</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/yearcost/explain/lotteworld"}>연간회원권</NavLink></S.DropDownMenu>
							</S.DropDownContainer>	
						</S.NavListItem>
            <S.NavListItem>
							FnB/상점
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/fnb/lotteworld"}>FnB</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/giftshop/lotteworld"}>기프트샵</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
						</S.NavListItem>
            <S.NavListItem>
							<NavLink to={"guidemap/lotteworld"}>
								가이드맵
							</NavLink>
							<S.ActiveBar width='6rem' />
						</S.NavListItem>
            <S.NavListItem>
							게시판
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/event/lotteworld"}>QnA</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/faq/list"}>FaQ</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/lostmfound/list/lotteworld"}>분실물</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
						</S.NavListItem>
					</S.NavList>
				</S.NavMenuWrapper>
				<S.UserMenuWrapper>
					{user ? (
						<S.NavList>
							<S.NavListItem>
								<NavLink to={"/myPage"}>마이페이지</NavLink>
								<S.ActiveBar width="6rem" />
							</S.NavListItem>
							<S.NavListItem>
								로그아웃
								<S.ActiveBar width="6rem" />
							</S.NavListItem>
						</S.NavList>
					) : (
						<S.NavList>
							<S.NavListItem>
								<NavLink to={"/signIn"}>로그인</NavLink>
								<S.ActiveBar width="6rem" />
							</S.NavListItem>
							<S.NavListItem>
								<NavLink to={"/signUp"}>회원가입</NavLink>
								<S.ActiveBar width="6rem" />
							</S.NavListItem>
						</S.NavList>
					)}
				</S.UserMenuWrapper>
			</S.NavBarWrapper>
			<S.Footer>
				<S.Image className='footerlogo' src={logoWhite} />
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
		</S.Background>
	);
};

export default LayoutMain;