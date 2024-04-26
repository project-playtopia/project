import React, { useState, useEffect } from 'react';
import { Link,  } from 'react-router-dom'; 
import FaqTable from './FaqTable.js';
import FaqRow from './FaqRow.js';
import Faqcolumn from './Faqcolumn.js';
import BasicButton from '../../components/button/BasicButton.jsx';
import S from './style.js';
import './faq.css'


const FaqListContainer = (props) => { 
  const [faqlist, setFaqList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

 

  useEffect(() => {
    fetch(`http://localhost:8001/faqlist?page=${currentPage}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`http error ${res.status}`);
        }
        return res.json();
      })
      .then(({ faqlist, totalPages }) => {
        console.log('데이터쪽', faqlist);
        if (Array.isArray(faqlist)) {
          setFaqList(faqlist);
          setTotalPages(totalPages); 
        } else {
          console.error('데이터쪽', faqlist);
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
    
      <FaqTable headersName={['No', '제목', '내용', '등록일']} >
        {faqlist.map((item, i) => (
          <FaqRow key={i} className="tablerow" >
            <Faqcolumn>{item.no}</Faqcolumn>
            <Faqcolumn className="faq-title">{item.title}</Faqcolumn>
            <Faqcolumn  className="faq-link"   >
              <Link to={`/faq/explain/${item.no}`}>{item.content}</Link>
            </Faqcolumn>
            <Faqcolumn>{item.date}</Faqcolumn>
          </FaqRow>
        ))}
      </FaqTable>
      
      <S.pagebutton>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <BasicButton
            color={"white"}
            variant={"main"}
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

export default FaqListContainer;
