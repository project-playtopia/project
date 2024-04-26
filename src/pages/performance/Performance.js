

import React, { useState } from 'react';
import S from './style.js';

const Performance = () => {

  const [selectedDate, setSelectedDate] = useState(null);

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
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "에버랜드", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "서울랜드", 
        time: "10:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
     

      // 추가된 공연 정보들...
    ],

    "4/22": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/23": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/24": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/25": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/26": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    "4/27": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "13:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크B", 
        time: "12:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
    ],
    
  };

  const handleButtonClick = (date) => {
    setSelectedDate(date); // 선택된 날짜 상태 업데이트
  };
  
  // 선택된 날짜에 따른 공연 리스트를 시간 순으로 정렬하는 함수
  const getSortedPerformancesByTime = (date) => {
    const performances = dateLists[date];
    if (!performances) {
      return [];
    }
    return performances.sort((a, b) => {
      const timeA = a.time.split(':').join(''); // "11:00" -> "1100"
      const timeB = b.time.split(':').join(''); // "16:00" -> "1600"
      return timeA.localeCompare(timeB); // 문자열 비교로 시간 순 정렬
    });
  };

  return (
    <div >
      <S.Title>공연일정</S.Title>
      <S.Div>
        {Object.keys(dateLists).map((date) => (
          <S.Button
            key={date}
            onClick={() => handleButtonClick(date)}
            isSelected={selectedDate === date} // 선택된 버튼 스타일 적용을 위한 prop
          >
            {date}
          </S.Button>
        ))}
      </S.Div>

      {/* 선택된 날짜에 따른 리스트 보여주기, 시간 순으로 정렬된 리스트 사용 */}
      <ul>
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
      </ul>
    </div>
  );
};

export default Performance;

























// import React , {useState} from 'react';
// import S from './style.js';

// const Performance = () => {

//   const [selectedDate, setSelectedDate] = useState(null);

//   const dateLists = {
//     "4/21": [
//       { 
//         id: 1, 
//         image: "/lotte_19275_main.jpg", 
//         parkName: "파크A", 
//         time: "11:00", 
//         performanceName: "런런런! 스노우 프렌즈", 
//         location: "알파인스테이지" 
//       },
      
//     ],
//     "4/22": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ],
//     "4/23": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ],
//     "4/24": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ],
//     "4/25": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ],
//     "4/26": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ],
//     "4/27": [
//       { 
//         id: 1, 
//         image: "/path/to/imageB.jpg", 
//         parkName: "파크B", 
//         time: "16:00", 
//         performanceName: "매직 쇼", 
//         location: "메인 광장" 
//       },

//     ]



//   };

//   const handleButtonClick = (date) => {
//     setSelectedDate(date); // 선택된 날짜 상태 업데이트
//   };

//   return (

//     <div >

//       <S.Title>공연일정</S.Title>

//        <S.Div>
//         {Object.keys(dateLists).map((date) => (
//           <S.Button
//             key={date}
//             onClick={() => handleButtonClick(date)}
//             isSelected={selectedDate === date} // 선택된 버튼 스타일 적용을 위한 prop
//           >
//             {date}
//           </S.Button>
//         ))}
//       </S.Div>


//       {/* 선택된 날짜에 따른 리스트 보여주기 */}
//       <ul>
//       {selectedDate && dateLists[selectedDate].map((item) => (
//         <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'  , flex_direction :'row'}}>
//           <img src={item.image} alt="공연 이미지" style={{ width: '200px', height: '160px', marginRight: '100px' }} />
//           <div>
//             <p><strong>{item.parkName}</strong> {item.time}</p>
//             <p>{item.performanceName}</p>
//             <p>{item.location}</p>
//           </div>

//           <img src={item.image} alt="공연 이미지" style={{ width: '200px', height: '160px', marginRight: '100px' }} />
//           <div>
//             <p><strong>{item.parkName}</strong> {item.time}</p>
//             <p>{item.performanceName}</p>
//             <p>{item.location}</p>
//           </div>
//         </li>

        
//       ))}
//       </ul>
//     </div>









   
      

//   );
// };




// export default Performance;
