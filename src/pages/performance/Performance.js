
import React, { useState } from 'react';
import S from './style.js';

const Performance = () => {
  let dayNow = new Date();
  let today = dayNow.getDate()
  const [selectedDate, setSelectedDate] = useState(null);
  let temp = 0;

  const dateLists = {
    "4/21": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "15:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 2, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 3, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "10:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],

    "4/22": [
      { 
        id: 4, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "11:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 5, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 6, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "18:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/23": [
      { 
        id: 7, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "15:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 8, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 9, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "20:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/24": [
      { 
        id: 10, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "11:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 11, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "14:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 12, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "17:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/25": [
      { 
        id: 13, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "19:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 14, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      {
      id: 15, 
      image: "/lotte_19275_main.jpg", 
      parkName: "서울랜드", 
      time: "15:00", 
      performanceName: "런런런! 스노우 프렌즈", 
      location: "알파인스테이지" 
      },
    ],
    "4/26": [
      { 
        id: 16, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 17, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 18, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "11:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/27": [
      { 
        id: 19, 
        image: "/lotte_19275_main.jpg", 
        parkName: "롯데월드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 20, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "17:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 21, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "21:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
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
        {Object.keys(dateLists).map((date, i) => (
          <S.Button
            key={date}
            onClick={() => handleButtonClick(date)}
            isSelected={selectedDate === date} 
          >
            {/* {date} */}
            {today + i > 30 ? `5.` : `4.`}
            {today + i > 30 ? (
              ++temp
            ) : (
              today + i
            )}
          </S.Button>
        ))}
      </S.Div>

      

      {/*퍼포먼스 리스트*/}
      <S.Centerul>
      {selectedDate && getSortedPerformancesByTime(selectedDate).map((item) => (
        <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexDirection: 'row' }}>
          <img src={item.image} alt="공연 이미지" style={{ width: '200px', height: '160px', marginRight: '20px' }} />
          <div>
            <p><strong>{item.parkName}</strong> {item.time}</p>
            <p>{item.performanceName}</p>
            <p>{item.location}</p>
          </div>
        </li>
      ))}
      </S.Centerul>
    </div>
  );
};

export default Performance;

























