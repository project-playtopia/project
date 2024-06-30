import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SeoullandAttraction = () => {
    const [attractions, setAttractions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');  // 검색어 전체 입력값
    const [filteredAttractions, setFilteredAttractions] = useState([]); // 필터링된 어트랙션 데이터

 // useEffect 훅은 searchTerm이나 attractions가 변경될 때마다 필터링 작업을 수행함
 // 필터링된 결과는 setFilteredAttractions 함수를 통해 상태로 저장됨
 
    useEffect(() => {
        // 컴포넌트가 처음 렌더링 될 때 데이터 가져옴
        const getAttractions = async () => {
            const response = await fetch(`http://localhost:8000/attraction/seoulland`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        const datas = await response.json();
            setAttractions(datas);  // 전체 데이터를 저장
            setFilteredAttractions(datas);  // 필터링 된 데이터를 저장
        };
       getAttractions();
      }, []);

    useEffect(() => {
        // 검색어가 변경될 때 마다 필터링 수행
        const filtered = attractions.filter(att =>
            att.title.includes(searchTerm)
        );
        setFilteredAttractions(filtered);
        }, [searchTerm, attractions]);

    const handleSearch = () => {
    // 검색 버튼 클릭 시 필터링을 수행
        const filtered = attractions.filter(att =>
        att.title.includes(searchTerm)
    );
    setFilteredAttractions(filtered); // 필터링 된 상태를 데이터에 저장
    }; 

    const attractionsList = filteredAttractions.map((att, i) => (
        <S.ImageWrapper key={i}>
            <NavLink to={`/attraction/seoulland/explain/${att.id}`}>
                <S.Image src={`${process.env.PUBLIC_URL}/AttractionsImage/Seoulland/at${att.id}.jpg`} alt="attraction" />
                <div>
                    <p>{att.title}</p>
                    <span>{att.location}</span>
                </div>
            </NavLink>
        </S.ImageWrapper>
       ));

        return (
          <S.Background className='notosanskr'>
            <S.Header1>어트랙션</S.Header1>

            <S.NavParkSelector>
                <NavLink to={"/attraction/lotteworld"}>롯데월드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/everland"}>에버랜드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/seoulland"}>서울랜드</NavLink>
            </S.NavParkSelector>

            <S.SearchContainer>
                <S.SearchWrapper>
                    <S.SearchInput
                        id='search-input'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <S.SearchBtn onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" />
                    </S.SearchBtn>
                </S.SearchWrapper>
            </S.SearchContainer>

             <div>
                <S.AttractionsContainer>
                   {filteredAttractions && attractionsList}
                </S.AttractionsContainer>
             </div>
            </S.Background>
      );
   };

 export default SeoullandAttraction;
