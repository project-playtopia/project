import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './newStyle.js';
import { useDispatch } from 'react-redux';
import { setPreviousUrl } from '../../modules/user.js';
import logoImage from './logo/logo.png'; 
import logoWhite from './logo/logoWhite.png'
import mobileImage from './logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHorse, faCircleDollarToSlot,  faUtensils, faMapLocationDot, faPenToSquare, faBars, faCircleUser, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../myPage/UserContext.js';

const Layout = () => {

	const {user, setUser} = useUser();
	const [isOpen, setIsOpen] = useState(true);

	useEffect(()=>{
		if(window.innerWidth < 728){
			setIsOpen(false);
		}else{
			setIsOpen(true);
		}
	},[window.innerWidth]);

	useEffect(()=>{
		if(isOpen){
			document.getElementById('nav-menu-wrapper').style.display = 'block';
			document.getElementById('user-menu-wrapper').style.display = 'block';
			document.getElementById('dark-div').style.display = 'block';
		}else{
			document.getElementById('nav-menu-wrapper').style.display = 'none';
			document.getElementById('user-menu-wrapper').style.display = 'none';
			document.getElementById('dark-div').style.display = 'none';
		}
	}, [isOpen]);

	const onClickToToggleMenu = ()=>{
		setIsOpen(!isOpen);
	}

	return (
		<S.Background className='notosanskr'>
			<>
				<Outlet />
			</>
			<S.NavBarWrapper>
				<S.MenuBurgerWrapper onClick={onClickToToggleMenu}>
					<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
				</S.MenuBurgerWrapper>
				<Link to={"/"}>
					<S.LogoImgWrapper imgSrc={logoImage} />
				</Link>
				<S.NavMenuWrapper id='nav-menu-wrapper'>
					<S.NavList>
						<S.NavListItem>
							<S.IconWrapper>
								<FontAwesomeIcon icon={faHorse} fontSize={"1.7rem"} />
							</S.IconWrapper>
							<S.MenuText>즐길거리</S.MenuText>
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/attraction/lotteworld"}>어트랙션</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/performance"}>공연정보</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/course/lotteworld"}>추천코스</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
							<S.ArrowIcon className='arrow-icon'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</S.ArrowIcon>
						</S.NavListItem>
            <S.NavListItem>
							<S.IconWrapper>
								<FontAwesomeIcon icon={faCircleDollarToSlot} />
							</S.IconWrapper>
							<S.MenuText>요금정보</S.MenuText>
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/basiccost/lotteworld"}>기본요금</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/benefit/lotteworld"}>이달의 혜택</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/yearcost/explain/lotteworld"}>연간회원권</NavLink></S.DropDownMenu>
							</S.DropDownContainer>	
							<S.ArrowIcon className='arrow-icon'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</S.ArrowIcon>
						</S.NavListItem>
            <S.NavListItem>
							<S.IconWrapper>
								<FontAwesomeIcon icon={faUtensils} />
							</S.IconWrapper>
							<S.MenuText>FnB/상점</S.MenuText>
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/fnb/lotteworld"}>FnB</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/giftshop/lotteworld"}>기프트샵</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
							<S.ArrowIcon className='arrow-icon'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</S.ArrowIcon>
						</S.NavListItem>
            <S.NavListItem>
							<S.IconWrapper>
								<FontAwesomeIcon icon={faMapLocationDot} fontSize={"1.7rem"} />
							</S.IconWrapper>
							<NavLink to={"guidemap/lotteworld"}>
								가이드맵
							</NavLink>
							<S.ActiveBar className='active-bar' width='6rem' />
						</S.NavListItem>
            <S.NavListItem>
							<S.IconWrapper>
								<FontAwesomeIcon icon={faPenToSquare} />
							</S.IconWrapper>
							<S.MenuText>게시판</S.MenuText>
							<S.DropDownContainer>
								<S.DropDownMenu><NavLink to={"/event/lotteworld"}>QnA</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/faq/list"}>FaQ</NavLink></S.DropDownMenu>
								<S.DropDownMenu><NavLink to={"/lostmfound/list/lotteworld"}>분실물</NavLink></S.DropDownMenu>
							</S.DropDownContainer>
							<S.ArrowIcon className='arrow-icon'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</S.ArrowIcon>
						</S.NavListItem>
					</S.NavList>
				</S.NavMenuWrapper>
				<S.UserMenuWrapper id="user-menu-wrapper">
					<S.UserIconContainer>
						<S.UserIconWrapper>
							<FontAwesomeIcon icon={faCircleUser}/>
						</S.UserIconWrapper>
						<span>
							{user ? user.id : "로그인하세요"}
						</span>
					</S.UserIconContainer>
					{user ? (
						<S.NavUserList>
							<S.UserListItem>
								<NavLink to={"/myPage"}>마이페이지</NavLink>
								<S.ActiveBar width="6rem" />
							</S.UserListItem>
							<S.UserListItem>
								로그아웃
								<S.ActiveBar width="6rem" />
							</S.UserListItem>
						</S.NavUserList>
					) : (
						<S.NavUserList>
							<S.UserListItem>
								<NavLink to={"/signIn"}>로그인</NavLink>
								<S.ActiveBar className='active-bar' width="6rem" />
							</S.UserListItem>
							<S.UserListItem>
								<NavLink to={"/signUp"}>회원가입</NavLink>
								<S.ActiveBar className='active-bar' width="6rem" />
							</S.UserListItem>
						</S.NavUserList>
					)}
				</S.UserMenuWrapper>
			</S.NavBarWrapper>
			<S.DarkDiv id='dark-div'></S.DarkDiv>
		</S.Background>
	);
};
export default Layout;