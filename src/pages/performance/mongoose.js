import connect from "./connect.js";

connect();

const performanceData = new Performance({
    date: new Date('2021-04-21'), // '4/21'을 Date 객체로 변환
    performances: [
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
        performanceName: "레니와 라라의 매지컬 스케치북", 
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
    ]
  });
  
  // 데이터베이스에 저장
   performanceData.save()
    .then(doc => console.log('저장 성공:', doc))
    .catch(err => console.error('저장 실패:', err))