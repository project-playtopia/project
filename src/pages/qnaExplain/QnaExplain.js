import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import S from './style.js';


const QnaExplain = () => {
  const { id } = useParams();
   const [qnaexplain , setQnaExplain] = useState([])

   useEffect(() => {
    fetch(`http://localhost:8004/qnaexplain/list`)
      .then((res) => res.json())
      .then((data) => setQnaExplain(data.qnaexplain));
  }, []);


   
  return (
    <>
      <div>
     <S.header>QnA</S.header> 
     </div>
     <div>
     <S.container2>
        {qnaexplain.map((item, i) => (
          <div key={i} >
            {item.no.toString() === id && (
              <S.container1 >
                <S.title >
                  <p>Q.</p>
                  <S.padding >{item.title}</S.padding >
                </S.title>
                <S.namebox >
                <p>{item.name}님, 문의하신 질문에 대한 답변 드립니다.</p>
                </S.namebox >
                <S.content>
                  
                  <S.a>A. </S.a>
                  <S.padding>{item.content}</S.padding>
                </S.content>
              </S.container1>
            )}
          </div>
        ))}
      </S.container2>
      </div>
        
      <S.buttonbox>

      <S.backbutton >
        <Link style={{color:"#fff"}} to={`/qna/list`}>뒤로가기</Link>
      </S.backbutton>

    </S.buttonbox>
      
    </>
  );
};

export default QnaExplain;