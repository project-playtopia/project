import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import S from './style.js';

const SeroullandAttraction = () => {

    const [attractions, setAttractions] = useState([])
    useEffect(() => {
        const getAttractions = async () => {
            const response = await fetch(`http://localhost:8000/attraction/Seoulland`, {
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
    }, [])

    // 화면에 뿌리기 위해 리스트를 구현한다.
    const attractionsList = attractions.map((att, i) => (
        <S.ImageWrapper>
        <NavLink key={i} to={`/attraction/seoulland/explain/${att.id}`}>
            {/* <img src={`process.env.PUBLIC_URL/pages/attractions/lotte/blahblah${att.id}.jpg`} /> */}
             <S.Image src={`${process.env.PUBLIC_URL}/AttractionsImage/Seoulland/at${att.id}.jpg`} alt="attraction" />
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
                <NavLink to={"/attraction/lotteworld"}>롯데월드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/everland"}>에버랜드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/seoulland"}>서울랜드</NavLink>
            </S.NavParkSelector>

        

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