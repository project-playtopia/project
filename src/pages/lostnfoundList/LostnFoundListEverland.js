import React, { useState, useEffect } from 'react';
import S from './style.js';
import { Link } from 'react-router-dom';
import LostnFoundTable from './LostnFoundTable.js';
import LostnFoundTableRow from './LostnFoundTableRow.js';
import LostnFoundTableColumn from './LostnFoundTableColumn.js'; 
import BasicSearch from '../../components/search/BasicSearch.jsx';
import BasicButton from '../../components/button/BasicButton.jsx';


// "lostnfound/list/everland"
// "lostnfound/list/lotteworld"
// "lostnfound/list/seoulland"


const LostnFoundListEverland = () => {
  const [lostlist, setLostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

  useEffect(() => {
    fetch(`http://localhost:8010/lostnfoundlist/?page=${currentPage}&company=everland`)
      .then((res) => res.json())
      .then(({ lostnfoundlist,totalPages }) => {
        if (Array.isArray(lostnfoundlist)) {
          setLostList(lostnfoundlist);
          setTotalPages(totalPages); 
        }
      })
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <S.margin></S.margin>
      <S.head>
      <S.header>
      <h1>분실물 리스트</h1>
      
      </S.header>
      
        <S.title>
          <Link to={"/lostnfound/list/lotteworld"}><S.lotteworld>롯데월드</S.lotteworld></Link>
          <S.everland color='#1FB1D9' >에버랜드</S.everland >
          <Link to={"/lostnfound/list/seoulland"}><S.seoulland>서울랜드</S.seoulland></Link>
        </S.title>
        <S.basicbox>
        <BasicSearch size={"default"} shape={"default"} classname="serach"/>
        
        <BasicButton size={"small"} shape={"default"} variant={"main"} color={"white"}>
        <Link to={`/lostnfound/register/everland`}>글쓰기</Link></BasicButton>
        
        </S.basicbox>
        

      </S.head>
      
        
      <LostnFoundTable headersName={['No', '습득물', '습득장소', '습득날짜', '처리결과']} >
        {lostlist
          .filter(item => item.company === "everland")
          .map((item, i) => (
            <LostnFoundTableRow key={i} className="tablerow" >
              <LostnFoundTableColumn>{item.no}</LostnFoundTableColumn>
                <LostnFoundTableColumn>
                  {item.item}
                </LostnFoundTableColumn>
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
        
      <S.pagebutton>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <BasicButton color={"white"} variant={"main"} className="pagebutton" key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </BasicButton>
        ))}
      </S.pagebutton>
    </>
  );
};




export default LostnFoundListEverland;