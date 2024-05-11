

import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Performance = () => {
  let dayNow = new Date();
  const [selectedDate, setSelectedDate] = useState(null);


  const dateLists = {
    "4/21": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "15:00", 
        performanceName: "런런 !프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 2, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "매지컬 스케치북", 
        location: "알파인스테이지" 
      },
      { 
        id: 3, 
        image: "/AttractionsImage/performance/seoul1.jpg", 
        parkName: "서울랜드", 
        time: "10:00", 
        performanceName: "뮤직 로드쇼", 
        location: "통나무 소극장" 
      },
    ],

    "4/22": [
      { 
        id: 4, 
        image: "/AttractionsImage/performance/lotte2.jpg", 
        parkName: "롯데월드", 
        time: "11:00", 
        performanceName: "키디밴드", 
        location: "키디존" 
      },
      { 
        id: 5, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "슈퍼윙스 애니멀 톡", 
        location: "알파인스테이지" 
      },
      { 
        id: 6, 
        image: "/AttractionsImage/performance/seoul2.jpg", 
        parkName: "서울랜드", 
        time: "18:00", 
        performanceName: " 스트릿 저글링 쇼!", 
        location: "세계의 광장" 
      },
    ],
    "4/23": [
      { 
        id: 7, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "15:00", 
        performanceName: "로티스 퍼레이드", 
        location: "어드벤처 1층 " 
      },
      { 
        id: 8, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "레니의 컬러풀드림", 
        location: "알파인스테이지" 
      },
      { 
        id: 9, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "20:00", 
        performanceName: "키즈 나이트파티", 
        location: "세계의 광장" 
      },
    ],
    "4/24": [
      { 
        id: 10, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "11:00", 
        performanceName: "월드팝 밴드 쇼", 
        location: "만남의 광장" 
      },
      { 
        id: 11, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "14:00", 
        performanceName: "카니발 판타지", 
        location: "알파인스테이지" 
      },
      { 
        id: 12, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "17:00", 
        performanceName: "애니멀킹덤", 
        location: "이벤트홀" 
      },
    ],
    "4/25": [
      { 
        id: 13, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "19:00", 
        performanceName: "못말리는 그리피", 
        location: "어린이 동화극장" 
      },
      { 
        id: 14, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "카피바라 애니멀톡", 
        location: "알파인스테이지" 
      },
      {
      id: 15, 
      image: "/lotte_19275_main.jpg", 
      parkName: "서울랜드", 
      time: "15:00", 
      performanceName: "플라워즈업! 로드쇼", 
      location: "서울랜드 전역" 
      },
    ],
    "4/26": [
      { 
        id: 16, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "14:00", 
        performanceName: "신비의 동화나라", 
        location: "가든 스테이지" 
      },
      { 
        id: 17, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "16:00", 
        performanceName: "애니멀톡", 
        location: "알파인스테이지" 
      },
      { 
        id: 18, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "20:00", 
        performanceName: "레이저쇼", 
        location: "알파인스테이지" 
      },
    ],
    "4/27": [
      { 
        id: 19, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "12:00", 
        performanceName: "재즈 앙상블", 
        location: "만남의 광장" 
      },
      { 
        id: 20, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "18:00", 
        performanceName: "주크박스", 
        location: "알파인스테이지" 
      },
      { 
        id: 21, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "21:00", 
        performanceName: "루나-빛의전설", 
        location: "지구별무대" 
      },
    ],
    
  };

  const handleButtonClick = (date) => {
    setSelectedDate(date); // 선택된 날짜 상태 업데이트
  };
  
  // 선택된 날짜에 따른 공연 리스트를 시간 순으로 정렬
  const getSortedPerformancesByTime = (date) => {
    const performances = dateLists[date];
    if (!performances) {
      return [];
    }
    return performances.sort((a, b) => {
      const timeA = a.time.split(':').join(''); 
      const timeB = b.time.split(':').join(''); 
      return timeA.localeCompare(timeB); 
    });
  };
  
  return (
    <div >
      <S.Title>공연일정</S.Title>
      <S.Div>

      {Object.keys(dateLists).map((date, i) => {
        
          let buttonDate = new Date(dayNow);
          buttonDate.setDate(buttonDate.getDate() + i);


          let displayDate = `${buttonDate.getMonth() + 1}.${buttonDate.getDate()}`;

          return (
            <S.Button
              key={date}
              onClick={() => handleButtonClick(date)}
              isSelected={selectedDate === date}
            >
              {displayDate}
            </S.Button>
          );
        })}

  


      </S.Div>

      

      {/*퍼포먼스 리스트*/}
      <S.Centerul>
      {selectedDate && getSortedPerformancesByTime(selectedDate).map((item) => (
        <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexDirection: 'row' }}>
          <S.Img src={item.image} alt="공연 이미지"  />
          <S.List>
            <p> <FontAwesomeIcon icon={faLocationDot} style={{color: '#FE78C0'}}></FontAwesomeIcon>  {item.parkName}
            <span>{item.time}</span></p>
            <p>{item.performanceName}</p>
            <p>{item.location}</p>
          </S.List>
        </li>
      ))}
      </S.Centerul>
    </div>
  );
};

export default Performance;

























