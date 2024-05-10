import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import S from './style.js';

const SeroullandAttraction = () => {
    // lotteWorld, seoulLand, everland
    const [currentValue, setCurrentValue] = useState('seoulland')

    // 클릭하면 currentValue를 바꿔 fetch 경로를 바꾼다.
    const onClickToLotte = () => { setCurrentValue('lotteWorld') }
    const onClickToSeoul = () => { setCurrentValue('seoulLand') }
    const onClickToEver = () => { setCurrentValue('everland') }

    // currentValue에 맞는 데이터를 fetch로 불러온다.
    // 의존성 배열에 [currentValue]를 넣어 onClick으로 바뀌었을 때 새로 불러온다.
    const [attractions, setAttractions] = useState([])
    useEffect(() => {
        const getAttractions = async () => {
            const response = await fetch(`http://localhost:8000/attraction/${currentValue}`, {
                method : 'POST',
                credentials : 'include',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const datas = await response.json()
            return datas;
        }
        getAttractions().then(setAttractions)
    }, [currentValue])

    // 화면에 뿌리기 위해 리스트를 구현한다.
    const attractionsList = attractions.map((att, i) => (
        <S.ImageWrapper>
        <NavLink key={i} to={`/attraction/seoulland/explain/${att.id}`}>
            {/* <img src={`process.env.PUBLIC_URL/pages/attractions/lotte/blahblah${att.id}.jpg`} /> */}
             <S.Image src={`${process.env.PUBLIC_URL}/AttractionsImage/${currentValue}/at${att.id}.jpg`} alt="attraction" />
            <div>
                <p>{att.title}</p>
                <span>{att.location}</span>
                {/* <p>{att.discription}</p> */}
            </div>  
        </NavLink>
        </S.ImageWrapper>
        
    ))

    return (
        <S.Background>

          <S.NavParkSelector>
            <button onClick={onClickToLotte}>롯데월드</button>
             <span>|</span>
             <button onClick={onClickToEver}>에버랜드</button>
             <span>|</span>
             <button onClick={onClickToSeoul}>서울랜드</button>
             </S.NavParkSelector>

            {/* <S.NavParkSelector>
            <NavLink to={"/attraction/lotteworld"}>
                <p>롯데월드</p>
            </NavLink>
            <span>|</span>
            <NavLink to={"/attraction/everland"}>
                <p>에버랜드</p>
            </NavLink>
            <span>|</span>
            <NavLink to={"/attraction/seoulland"}>
                <p>서울랜드</p>
            </NavLink>
            </S.NavParkSelector> */}


            <S.search className='searchbar'>
              <BasicSearch  shape={"default"} variant={"main"} size={"default"} />
             </S.search>

            <div>
                <S.AttractionsContainer>
                {attractions && attractionsList}
                </S.AttractionsContainer>
            </div>
        </S.Background>
    );
};

export default SeroullandAttraction;