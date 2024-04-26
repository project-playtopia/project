import React , {useState} from 'react';
import S from './style.js';

const Performance = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  const dateLists = {
    "4/21": [
      { 
        id: 1, 
        image: "/lotte_19275_main.jpg", 
        parkName: "파크A", 
        time: "14:00", 
        performanceName: "런런런! 스노우 프렌즈", 
        location: "알파인스테이지" 
      },
      // 다른 공연 정보도 같은 형식으로 추가...
    ],
    "4/22": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ],
    "4/23": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ],
    "4/24": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ],
    "4/25": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ],
    "4/26": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ],
    "4/27": [
      { 
        id: 1, 
        image: "/path/to/imageB.jpg", 
        parkName: "파크B", 
        time: "16:00", 
        performanceName: "매직 쇼", 
        location: "메인 광장" 
      },

    ]



  };

  const handleButtonClick = (date) => {
    setSelectedDate(date); // 선택된 날짜 상태 업데이트
  };

  return (

    <div >
       공연 일정

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


      {/* 선택된 날짜에 따른 리스트 보여주기 */}
      <ul>
      {selectedDate && dateLists[selectedDate].map((item) => (
        <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'  , flex_direction :'row'}}>
          <img src={item.image} alt="공연 이미지" style={{ width: '200px', height: '160px', marginRight: '100px' }} />
          <div>
            <p><strong>{item.parkName}</strong> {item.time}</p>
            <p>{item.performanceName}</p>
            <p>{item.location}</p>
          </div>

          <img src={item.image} alt="공연 이미지" style={{ width: '200px', height: '160px', marginRight: '100px' }} />
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
