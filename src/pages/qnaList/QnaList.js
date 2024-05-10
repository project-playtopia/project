import React from 'react';
import QnaListContainer from './QnaListContainer.js';
import S from './style.js';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import { Link } from 'react-router-dom';



const QnaList = () => {
  return (
    <>
      <S.margin></S.margin>
      <S.header>
      <h1>QnA</h1>
      <BasicSearch size={"default"} shape={"default"} classname="serach"/>
      </S.header>
      <QnaListContainer/>
      
      
      
    </>
  );
};
export default QnaList;