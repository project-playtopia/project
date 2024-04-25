import React from 'react';
import FaqListContainer from './FaqListContainer.js';
import S from './style.js';
import BasicSearch from '../../components/search/BasicSearch.jsx';



const FaqList = () => {
  return (
    <>
      <S.margin></S.margin>
      <S.header>
      <h1>FAQ</h1>
      <BasicSearch size={"default"} shape={"default"} classname="serach"/>
      </S.header>
    
      <FaqListContainer/>
    </>
  );
};
export default FaqList;