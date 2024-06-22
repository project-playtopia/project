
import React, { useEffect, useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PerformanceItem from './PerformanceItem.jsx';


const Performance = () => {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const today = new Date();
  let month;
  let date;
  const dateList = [];
  for (let i=0; i<7; i++){
    month = today.getMonth() + 1;
    date = today.getDate();
    dateList.push(month + " / " + date);
    today.setDate(today.getDate() + 1);
  } 
  
  const [dateState, setDateState] = useState(dateList[0]);
  const [performanceList, setPerformanceList] = useState([]);


  
  const onClickToSelectDate = (d) => {
    setDateState(d);
  }

  const getData = async () => {
    let tempDate = dateState.split(' ');
    // '6 / 2'
    // ['6', '/' , '2']
    // 0602
    // 데이터 형식에 맞게 변환하는 것을 parsing(파싱)이라고 한다.
    let parseDate = ((parseInt(tempDate[0]) < 10) ? "0" + tempDate[0] : tempDate[0]) + ((parseInt(tempDate[2]) < 10) ? "0" + tempDate[2] : tempDate[2]);
    
    const res = await fetch(`http://localhost:8000/performance/list?date=${parseDate}`);
    const data = await res.json();


    const sortedData = data.sort((a, b) => {
      const timeA = new Date(`1970-01-01T${a.time}:00`);
      const timeB = new Date(`1970-01-01T${b.time}:00`);
      return timeA - timeB;
    });
    return sortedData;
    // return await data;
  }

  useEffect(()=>{
    document.getElementById("datewrapper").children.forEach((e)=>{
      if(e.innerText === dateState){
        e.classList.add('active');
      }else{
        e.classList.remove('active');
      }
    });
    
    getData()
    .then((data)=>{
      console.log(data);
      setPerformanceList(data);
    });

  },[dateState]);

  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>공연 일정</S.Header1>
        <S.DateWrapper id='datewrapper'>
          {
            dateList.map((d) => (
              <S.DateSelector onClick={()=>{onClickToSelectDate(d)}}>{d}</S.DateSelector>
            ))
          }
        </S.DateWrapper>
        <S.ItemContainer>
          {
            performanceList.map((e)=>(
              <PerformanceItem
                img={e.img}
                title={e.title}
                parkName={e.park_name}
                time={e.time}
                location={e.location}
              />
            ))
          }
        </S.ItemContainer>
      </S.Container>
    </div>
  );
};

export default Performance;

























