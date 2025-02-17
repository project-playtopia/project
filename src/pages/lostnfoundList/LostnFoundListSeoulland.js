import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LostnFoundTable from './LostnFoundTable.js';
import LostnFoundTableRow from './LostnFoundTableRow.js';
import LostnFoundTableColumn from './LostnFoundTableColumn.js'; 
import BasicSearch from '../../components/search/BasicSearch.jsx';

import S from './style.js';
import BasicButton from '../../components/button/BasicButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import BasicButton from '../../components/button/BasicButton.jsx';

const LostnFoundListSeoulland = () => {
  const [lostlist, setLostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState(""); 

  useEffect(() => {
    fetch(`https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/lostnfoundlist/list/?page=${currentPage}&company=seoulland`)
      .then((res) => res.json())
      .then(({ lostnfoundlist,totalPages }) => {
        if (Array.isArray(lostnfoundlist)) {
          lostlist.sort((a, b) => a.no - b.no);
          setLostList(lostnfoundlist);
          setTotalPages(totalPages); 
        }
      })
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchseoulland  = lostlist.filter((seoulland) => {
    return seoulland.item.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      
      <S.margin></S.margin>
  
      <S.header>
      <h1>분실물 리스트</h1>
      
      </S.header>
      
      
        <S.title>
          <Link to={"/lostnfound/list/lotteworld"} ><S.lotteworld>롯데월드</S.lotteworld></Link>
          <Link to={"/lostnfound/list/everland"} ><S.everland >에버랜드</S.everland ></Link>
          <S.seoulland color='#1FB1D9'>서울랜드</S.seoulland>
        </S.title>

        <S.title>
          <S.SearchWrapper>
            <S.SearchInput placeholder="검색어를 입력하세요." onChange={handleSearchChange} ></S.SearchInput>
            <S.SearchBtn ><FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" /></S.SearchBtn>
          

           <S.backbutton >
        <Link to={`/lostnfound/register/seoulland`}>등록하기
        </Link>
        </S.backbutton>
          </S.SearchWrapper>  
          </S.title>


      <div className="tablerow1">
      <LostnFoundTable headersName={['No', '습득물', '습득장소', '습득날짜', '처리결과']} >
        {searchseoulland
          .filter(item => item.company === "seoulland")
          .map((item, i) => (
            <LostnFoundTableRow key={i} className="tablerow" >
              <LostnFoundTableColumn>{item.no}</LostnFoundTableColumn>
              <LostnFoundTableColumn>{item.item}</LostnFoundTableColumn>
              
              <LostnFoundTableColumn>
                <Link  className="found-link" to={`/lostnfound/explain/${item.no}/${item.company}`}>
                  {item.found}
                </Link>
              </LostnFoundTableColumn>
              
              <LostnFoundTableColumn>{item.date}</LostnFoundTableColumn>
              <LostnFoundTableColumn>{item.result}</LostnFoundTableColumn>
            </LostnFoundTableRow>
          ))}
      </LostnFoundTable>
      </div>
      <S.pagebutton>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <BasicButton
            color={pageNumber === currentPage ? "#FE78C0" : "black"} 
            style={{background:"#fff",borderBottom: pageNumber === currentPage ? "2px solid #FE78C0" : "none"
            , color: pageNumber === currentPage ? "#FE78C0" : "black" 
            }}
            className="pagebutton"
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </BasicButton>
        ))}
      </S.pagebutton>
    </>
  );
};

export default LostnFoundListSeoulland;
