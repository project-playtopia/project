import express from 'express';
import router from './routes/router.js';
import connect from './connect.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import AttractionLotteWorldSchemas from './schemas/lotteWorldSchemas.js';
import AttractionEverLandSchemas from './schemas/everLandSchemas.js';
import AttractionSeoulLandSchemas from './schemas/seoulLandSchemas.js';

import AttractionLotteWorldExplainSchemas from './schemas/lotteWorldExplainSchemas.js';
import AttractionEverLandExplainSchemas from './schemas/everLandExplainSchemas.js';
import AttractionSeoulLandExplainSchemas from './schemas/seoulLandExplainSchemas.js';


// 커넥트 사용, 즉 몽고DB 연결
connect();

const app = express();
const port = 8000;

// 데이터와 관련 되어있는 디폴트 설정
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));

// Cross-Origin-Resoruce 설정 브라우저에서 누가 서버에 요청했는지 정확하게 확인하여 허용해주기 위한 설정
app.use(cors({
  origin : 'http://localhost:3000',
  method : ['GET', 'POST', 'DELETE', 'PUT'],
  credentials : true,
}));

// 라우팅을 가로채어 localhost:8000/attractions/작성한 라우팅
app.use('/attraction', router);





// // 서버 실행
app.listen(port, () => {
  console.log(`server is on ${port}`);
})





// await AttractionLotteWorldSchemas.create(
//   {
//     id: 1,
//     title: "슬릭스튜디오",
//     location: '어드벤처 4층',
//   } ,
//   {
//      id: 2,
//      title: "배틀그라운드 월드 에이전트",
//     location: '매직 아일랜드',
//    },
//    {
//      id: 3,
//     title: "카트라이더 레이싱월드",
//    location: '어드벤처 1층',
//     },
//     {
//       id: 4,
//      title: "월드 모노레일",
//      location: '어드벤처 3층',
//     },
//     {
//       id: 5,
//      title: "자이로드롭",
//     location: '매직아일랜드',
//      },
//     {
//       id: 6,
//       title: "자이로스윙",
//       location: '매직아일랜드',
//     },
//     {
//       id: 7,
//      title: "자이로스핀",
//      location: '매직아일랜드',
//      },
//       {
//        id: 8,
//         title: "아트란티스",
//        location: '매직아일랜드',
//       },
//       {
//          id: 9,
//         title: "혜성특급",
//         location: '매직아일랜드',
//         },
//         {
//           id: 10,
//           title: "번지드롭",
//           location: '매직아일랜드',
//         },
//         {
//            id: 11,
//            title: "회전그네",
//           location: '매직아일랜드',
//         },
//         {
//            id: 12,
//           title: "머킹의 회전목마",
//           location: '매직아일랜드',
//         },
//         {
//             id: 13,
//             title: "스페인 해적선",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 14,
//             title: "신밧드의 모험",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 15,
//             title: "회전목마",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 16,
//             title: "후룸라이드",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 17,
//             title: "회전바구니",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 18,
//             title: "문보트 (유료)",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 19,
//             title: "드래곤 와일드슈팅",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 20,
//             title: "플라이벤처",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 21,
//             title: "황야의 무법자",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 22,
//             title: "후렌치레볼루션",
//             location: '어드벤처 2층',
//         },
//         {
//             id: 23,
//             title: "범퍼카 (어드벤처)",
//             location: '어드벤처 2층',
//         },
//         {
//             id: 24,
//             title: "어크로스다크",
//             location: '어드벤처 4층',
//         },
//         {
//             id: 25,
//             title: "파라오의 분노",
//             location: '어드벤처 4층',
//         },
//         {
//             id: 26,
//             title: "풍선비행",
//             location: '어드벤처 4층',
//         },
//         {
//             id: 27,
//             title: "로티트레인",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 28,
//             title: "키즈토리아",
//             location: '어드벤처 1층',
//         },
//         {
//             id: 29,
//             title: "쁘띠빵빵",
//             location: '매직아일랜드',
//         },
//         {
//             id: 30,
//             title: "환타지드림",
//             location: '매직아일랜드',
//         },
//         {
//             id: 31,
//             title: "언더씨킹덤",
//             location: '키디존',
//         },
//         {
//             id: 32,
//             title: "어린이 범퍼카",
//             location: '키디존',
//         },
//         {
//             id: 33,
//             title: "점핑피쉬",
//             location: '키디존',
//         },
//         {
//             id: 34,
//             title: "유레카",
//             location: '키디존',
//         },
//         {
//             id: 35,
//             title: "햇님달님",
//             location: '키디존',
//         },
//         {
//             id: 36,
//             title: "스윙팡팡",
//             location: '키디존',
//         }) ;



//  await AttractionEverLandSchemas.create(
//     {
//         id: 1,
//          title: "아마존 익스프레스",
//         location: '주토피아',
    
//     },
//     {
//         id: 2,
//          title: "썬더 폴스",
//         location: '매직랜드',
//     },
//     {
//         id: 3,
//          title: "롤링 엑스트레인",
//         location: '아메리칸 어드벤처',
//     },
//     {
//         id: 4,
//          title: "허리케인",
//         location: '아메리칸 어드벤처',
//     },
//     {
//         id: 5,
//          title: "키즈 빌리지",
//         location: '매직랜드',
//     },
//     {
//         id: 6,
//         title: "매직 쿠키 하우스",
//         location: '매직랜드',
//     },
//     {
//         id: 7,
//          title: "로얄 쥬빌리 캐로셀",
//         location: '유러피안 어드벤처',
//     },
//     {
//         id: 8,
//          title: "자동차왕국",
//         location: '매직랜드',
//     },
//     {
//         id: 9,
//          title: "플래쉬 팡팡",
//         location: '매직랜드',
//     },
//     {
//         id: 10,
//          title: "피터팬",
//         location: '매직랜드',
//     },
//     {
//         id: 11,
//          title: "나는 코끼리",
//         location: '매직랜드',
//     },
//     {
//         id: 12,
//          title: "범퍼카",
//         location: '매직랜드',
//     },
//     {
//         id: 13,
//          title: "붕붕카",
//         location: '매직랜드',
//     },
//     {
//         id: 14,
//          title: " 매직 스윙",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 15,
//          title: "비룡 열차",
//         location: '매직랜드',
//     },
//     {
//         id: 16,
//          title: "스푸키 펀 하우스",
//         location: '매직랜드',
//     },
//     {
//         id: 17,
//          title: "레이싱 코스터",
//         location: '아메리칸 어드벤처',
//     },
//     {
//         id: 18,
//          title: "볼 하우스",
//         location: '매직랜드',
    
//     },
//     {
//         id: 19,
//          title: " 릴리 댄스",
//         location: '아메리칸 어드벤처',
//     },
//     {
//         id: 20,
//          title: "플라잉 레스큐",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 21,
//          title: "스페이스 투어 (4D어트랙션)",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 22,
//          title: " 슈팅고스트",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 23,
//          title: "T 익스프레스",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 24,
//          title: "사파리월드",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 25,
//          title: "로스트밸리",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 26,
//          title: "판다월드",
//         location: '아메리칸 어드벤처',
  
//     },
//     {
//         id: 27,
//          title: "콜럼버스 대탐험",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 28,
//          title: "더블 락스핀",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 29,
//          title: "렛츠 트위스트",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 30,
//          title: "시크릿쥬쥬 비행기",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 31,
//          title: "로보트카",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 32,
//          title: "스카이 댄싱 ",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 33,
//          title: "우주 전투기",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 34,
//          title: "플레이 야드",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 35,
//          title: " 페스티벌 트레인",
//         location: '아메리칸 어드벤처',
    
//     },
//     {
//         id: 36,
//          title: "레니의 마법학교",
//         location: '아메리칸 어드벤처',
    
//     }
// );

// await AttractionSeoulLandSchemas.create(
//   {
//         id :1,
//         title : "둥실 비행선",
//         location : '미래의 나라'
//         },
//         {
//         id :2,
//         title : "빅 회전목마",
//         location : '캐릭터 타운'
//         },
//         {
//         id :3,
//         title : "월드컵",
//         location : '캐릭터 타운'
//         },
//         {
//         id :4,
//         title : " 도깨비 바람",
//         location : '삼천리 동산'
//         },
//         {
//         id :5,
//         title : "쥬라기 랜드",
//         location : '캐릭터 타운'
//         },
//         {
//         id :6,
//         title : "킹바이킹",
//         location : '모험의 나라'
//         },
//         {
//         id :7,
//         title : "블랙홀 2000",
//         location : '미래의 나라'
//         },
//         {
//         id :8,
//         title : "라바 트위스터",
//         location : '캐릭터 타운'
//         },
//         {
//         id :9,
//         title : "은하열차 888",
//         location : '미래의 나라'
//         },
//         {
//         id :10,
//         title : "베스트 키즈",
//         location : '삼천리 동산'
//         },
//         {
//         id :11,
//         title : "시티패럿",
//         location : '세계의 광장'
//         },
//         {
//         id :12,
//         title : "급류타기",
//         location : '모험의 나라'
//         },
//         {
//         id :13,
//         title : "티키톡 열차",
//         location : '캐릭터 타운'
//         },
//         {
//         id :14,
//         title : "출동 ! 슈퍼윙스",
//         location : '미래의 나라'
//         },
//         {
//         id :15,
//         title : "브루미즈 동산",
//         location : '캐릭터 타운'
//         },
//         {
//         id :16,
//         title : "앨리스 원더하우스",
//         location : '캐릭터 타운'
//         },
//         {
//         id :17,
//         title : "터닝메카드 레이싱",
//         location : '캐릭터 타운'
//         },
//         {
//         id :18,
//         title : "피터팬",
//         location : '캐릭터 타운'
//         },
//         {
//         id :19,
//         title : "엑스 플라이어",
//         location : '미래의 나라'
//         },
//         {
//         id :20,
//         title : " 알포스윙",
//         location : '캐릭터 타운'
//         },
//         {
//         id :21,
//         title : "4D 깜짝모험관",
//         location : '미래의 나라'
//         },
//         {
//         id :22,
//         title : "달나라 열차",
//         location : '캐릭터 타운'
//         },
//         {
//         id :23,
//         title : "니나노 고카트",
//         location : '캐릭터 타운'
//         },
//         {
//         id :24,
//         title : "타임머신 5D 360",
//         location : '미래의 나라'
//         },
//         {
//         id :25,
//         title : "터닝메카드 고!범퍼카",
//         location : '캐릭터 타운'
//         },
//         {
//         id :26,
//         title : "록카페",
//         location : '미래의 나라'
//         },
//         {
//         id :27,
//         title : "샷드롭",
//         location : '미래의 나라'
//         },
//         {
//         id :28,
//         title : "깜부 비행기",
//         location : '미래의 나라'
//         },
//         {
//         id :29,
//         title : "스카이 엑스",
//         location : '캐릭터 타운'
//         },
//         {
//         id :30,
//         title : "뭉게공항 액션존",
//         location : '미래의 나라'
//         },
//         {
//         id :31,
//         title : "개구리 만세",
//         location : '캐릭터 타운'
//         },
//         {
//         id :32,
//         title : "미니 바이킹",
//         location : '미래의 나라'
//         },
//         {
//         id :33,
//         title : "해적소굴",
//         location : '캐릭터 타운'
//         },
//         {
//         id :34,
//         title : "도레미 악단",
//         location : '미래의 나라'
//         },
//         {
//         id :35,
//         title : "구름빵",
//         location : '미래의 나라'
//         },
//         {
//         id :36,
//         title : "춤추는 요술집",
//         location : '캐릭터 타운'
//         }

// );



// await AttractionEverLandExplainSchemas.create(
//   {
//    id :1 ,
//    title: "아마존 익스프레스" ,
//    description: " 많은 탐험가들이 호수 속에 잠들어 있는 황금을 차지하기 위해 보트 위에 몸을 맡겼다!",
//    image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//    height :"110cm~"
//   },
//   {
//     id: 2,
//     title: "썬더 폴스",
//     description: " 20미터의 국내 최고 낙하높이! 45도의 국내 최대 낙하각도! 국내 최초로 도입된 뒤로 떨어지는 백워드 드롭!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 3,
//     title: "롤링 엑스트레인",
//     description: "  정신을 차릴 수 없는 롤러코스터의 정석, 롤링 엑스 트레인!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 4,
//     title: "허리케인",
//     description: " 미국 서부 시대 한 마을을 덮친 허리케인... 19미터 높이에서 회전하는 메가톤급 회오리 속에 몸을 맡겨 보는거야",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 5,
//     title: "키즈 빌리지",
//     description: " 테마 별 체험을 통한 신체, 정서, 창의발달 프로그램을 4가지 테마로 경험하는 신개념 놀이터!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 6,
//     title: "매직 쿠키 하우스",
//     description: " 과자 집 콘셉트의 체험 공간 속에서 직접 몸으로 배우며 경험해요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 7,
//     title: "로얄 쥬빌리 캐로셀",
//     description: " 백마 탄 왕자와 공주가 만난 중세 유럽 무도회장의 분위기는 어떨까? 환상의 꿈결 같은 동화 속 주인공이 되어보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 8,
//     title: "자동차왕국",
//     description: " 구불구불 신나는 언덕길 드라이브! 꼬마 운전사들에게 그야말로 자동차 왕국이네요~",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 9,
//     title: "플래쉬 팡팡",
//     description: " 흐르는 음악과 함께 위로 아래로 동화속 엄지 공주가 되어 통통 튀는 의자에 앉아 신나게 놀아 보자구요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 10,
//     title: "피터팬",
//     description: "번쩍번쩍 불빛이 빛나는 탐험선을 타고 뒤쫓아오는 무서운 후크 선장을 따돌려라!!!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 11,
//     title: "나는 코끼리",
//     description: " 분홍색, 하늘색 귀여운 생김새로 하늘을 나는 코끼리를 타고 빙글빙글~ 하늘을 날고 싶은 코끼리의 소원을 이뤄주세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 12,
//     title: "범퍼카",
//     description: " 어트랙션의 원조!누구든 멋진 레이서가 될 수 있어 항상 사랑받는 우리의 범퍼카~",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 13,
//     title: "붕붕카",
//     description: " 누구든 멋진 레이서가 될 수 있어 !!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 14,
//     title: "매직 스윙",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 15,
//     title: "비룡 열차",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 16,
//     title: "스푸키 펀 하우스",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 17,
//     title: "레이싱 코스터",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 18,
//     title: "볼 하우스",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 19,
//     title: " 릴리 댄스",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 20,
//     title: "플라잉 레스큐",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 21,
//     title: "스페이스 투어 (4D어트랙션)",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 22,
//     title: "슈팅고스트",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 23,
//     title: "T 익스프레스",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 24,
//     title: "사파리월드",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 25,
//     title: "로스트밸리",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 26,
//     title: "판다월드",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 27,
//     title: "콜럼버스 대탐험",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 28,
//     title: "더블 락스핀",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 29,
//     title: "렛츠 트위스트",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 30,
//     title: "시크릿쥬쥬 비행기",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 31,
//     title: "썬더 폴스",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 32,
//     title: "로보트카",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 32,
//     title: "스카이 댄싱",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 33,
//     title: "우주 전투기",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 34,
//     title: "플레이 야드",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 35,
//     title: " 페스티벌 트레인",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    },
//   {
//     id: 36,
//     title: "레니의 마법학교",
//     description: " 나를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//     height : "110cm~"

//    }

 
// );



// await AttractionSeoulLandExplainSchemas.create(
//   {
//     id : "1" ,
//     title: "둥실 비행선",
//     description: "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
//     image:"/AttractionsImage/seoulland/ex1.jpg",
//     people : "8명",
//     height : "100cm~" ,
//     location : "캐릭터 타운"
//   },

  // {
  //   id : "2",
  //   title: "빅 회전목마",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "68명",
  //   height : "100cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "3",
  //   title: "월드컵",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "",
  //   height : "130cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "4",
  //   title: "도깨비 바람",
  //   description: "삼천리 동산",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "40명",
  //   height : "140cm~185cm" ,
  //   location : "삼천리동산"
  // },

  // {
  //   id : "5",
  //   title: "쥬라기 랜드",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "6",
  //   title: "킹바이킹",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "",
  //   height : "" ,
  //   location : "모험의 나라"
  // },

  // {
  //   id : "7",
  //   title: "블랙홀 2000",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "16명",
  //   height : "130cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "8",
  //   title: "라바 트위스터",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "8명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "9",
  //   title: "은하열차 888",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "8명",
  //   height : "130cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "10",
  //   title: "베스트 키즈",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "삼천리 동산"
  // },

  // {
  //   id : "11",
  //   title: "시티패럿",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "세계의 광장"
  // },

  // {
  //   id : "12",
  //   title: "급류타기",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "3명",
  //   height : "80cm~" ,
  //   location : "모험의 나라"
  // },

  // {
  //   id : "13",
  //   title: "티키톡 열차",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "8명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "14",
  //   title: "출동 ! 슈퍼윙스",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "8명",
  //   height : "110cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "15",
  //   title: "브루미즈 동산",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "16",
  //   title: "앨리스 원더하우스",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "17",
  //   title: "터닝메카드 레이싱",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "18",
  //   title: "피터팬",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "19",
  //   title: "엑스 플라이어",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "130cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "20",
  //   title: " 알포스윙",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "120cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "21",
  //   title: "4D 깜짝모험관",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "22",
  //   title: "달나라 열차", 
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "23",
  //   title: "니나노 고카트",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "120cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "24",
  //   title: "타임머신 5D 360",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "25",
  //   title: "터닝메카드 고!범퍼카",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "1명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "26",
  //   title: "록카페",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "2명",
  //   height : "130cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "27",
  //   title: "샷드롭",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "1명",
  //   height : "150cm~185cm" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "28",
  //   title: "깜부 비행기",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "8명",
  //   height : "130cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "29",
  //   title: "스카이 엑스",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "1명",
  //   height : "130cm~185cm" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "30",
  //   title: "뭉게공항 액션존",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "16명",
  //   height : "110cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "31",
  //   title: "개구리 만세",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "5명",
  //   height : "100cm~" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "32",
  //   title: "미니 바이킹",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "84명",
  //   height : "110cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "33",
  //   title: "해적소굴",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "제한없음",
  //   height : "제한없음" ,
  //   location : "캐릭터 타운"
  // },

  // {
  //   id : "34",
  //   title: "도레미 악단",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "18명",
  //   height : "110cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "35",
  //   title: "구름빵",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "5명",
  //   height : "100cm~" ,
  //   location : "미래의 나라"
  // },

  // {
  //   id : "36",
  //   title: "춤추는 요술집",
  //   description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
  //   image: "/AttractionsImage/seoulland/ex2.jpg",
  //   people : "12명",
  //   height : "110cm~" ,
  //   location : "캐릭터 타운"
  // },

  
// );
















// --------------------------------------------------------------------

// await AttractionLotteWorldExplainSchemas.create(
//   {
//       id :"1" ,
//       title: "슬릭스튜디오" ,
//       description: " 나를 만나보세요!",
//       image : "https://adventure.lotteworld.com/image/2023/6/202306150254118450_275.jpg",
//       people : "n명",
//       height :"110 -190 cm",
//       location : "어드벤쳐1층"
//   },

//   {
//       id : "2",
//       title : "배틀그라운드" ,
//       description : "나를 만나보세요!",
//       image : "https://adventure.lotteworld.com/image/2023/5/202305090949284180_275.jpg",
//       people : "n명",
//       height : " 제한없음 " ,
//       location : "어드벤처 1층"

//   },
//   {
//     id : "3",
//     title : "카트라이더 레이싱월드" ,
//     description : "게임 속에서만 즐기던 카트라이더를 이젠 롯데월드에서 직접 타면서 즐겨보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/12/202312060539554520_275.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "4",
//     title : "월드 모노레일" ,
//     description : "깜찍한 로티, 로리로 변신한 열차! 새로워진 월드모노레일을 만나보세요.",
//     image : "https://adventure.lotteworld.com/image/2022/5/202205090153288960_275.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "5",
//     title : "자이로드롭" ,
//     description : "구름이 맞닿을 듯한 높이까지 올라갔다 한 순간에 떨어지는 스릴만점 어트랙션입니다",
//     image : "https://adventure.lotteworld.com/image/2020/6/202006010125571450_1350.jpg" ,
//     people : "40명",
//     height : "130cm~190cm " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "6",
//     title : "자이로스윙" ,
//     description : "40여명이 둘러앉은 거대한 회전기구가 시계추처럼 움직여 새로운 공포를 느낄 수 있습니다.",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180608080208017_1350.jpg",
//     people : "40명",
//     height : " 130cm~190cm",
//     location : "어드벤처 1층"

// },
// {
//     id :"7",
//     title : "자이로스핀" ,
//     description : "아시아 최초 저소음 무진동 회전 어트랙션! 입이 쩍~ 벌어지는 놀라운 스피드를 경험해 보세요!!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180608045714696_1350.jpg",
//     people : "40명",
//     height : " 125cm 이상 탑승 가능 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "8",
//     title : "아트란티스" ,
//     description : "최고 스릴 어트랙션! 시속 72km로 출발하는 보트를 타고 미스터리 신전 속으로 여행을 떠나보세요!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180608062908467_1350.jpg",
//     people : "8명",
//     height : " 135cm이상~190cm " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "9",
//     title : "혜성특급" ,
//     description : "좌우로 회전하는 롤러코스터를 타고 떠나는 어둠 속 스펙터클 우주여행 !",
//     image : "https://adventure.lotteworld.com/image/2021/4/202104230354064271_1350.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "10",
//     title : "번지드롭" ,
//     description : "높이 38m의 짜릿함과 시속 90km로 추락 할 때의 스릴! 끝났구나 하고 안심하는 순간 한번 더~ 30초간 반복되는 번지드롭!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620074032868_1350.jpg",
//     people : "20명",
//     height : " 130cm~200cm" ,
//     location : "매직아일랜드 매직캐슬 좌측"

// },
// {
//     id : "11",
//     title : "회전그네" ,
//     description : "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620073652436_1350.jpg",
//     people : "32명",
//     height : " 120cm~" ,
//     location : "매직아일랜드 매직캐슬 좌측"

// },
// {
//     id : "12",
//     title : "머킹의 회전목마" ,
//     description : "머킹 왕실의 해마와 바다 생물들을 타며 즐기는 축제 한 마당",
//     image : "https://adventure.lotteworld.com/image/2020/11/202011161056458671_1350.jpg",
//     people : "24명",
//     height : "105cm~" ,
//     location : "매직아일랜드 번지드롭 우측"

// },
// {
//     id : "13",
//     title : "스페인해적선" ,
//     description : "높은 파도를 헤치며 고대의 보물을 찾아 떠나는 스페인해적선! 이곳에 탑승한 당신은 이제부터 진정한 해적!",
//     image : "https://adventure.lotteworld.com/image/2018/7/201807251058185011_1350.jpg",
//     people : "56명",
//     height : " 110cm~ " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "14",
//     title : "신밧드의모험" ,
//     description : "보트를 타고 떠나는 지하 속 신밧드의 모험 이야기",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180619090729664_1350.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "15",
//     title : "회전목마" ,
//     description : "64필의 아름다운 백마를 타고 떠나는 로맨틱한 여행!",
//     image : "	https://adventure.lotteworld.com/image/2018/6/20180619090616170_1350.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "16",
//     title : "후룸라이드" ,
//     description : "통나무 배를 타고 공룡들이 살고 있는 정글 속으로! ",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180611112403722_1350.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "17",
//     title : "회전바구니" ,
//     description : "빙글~ 빙글~ 쪽으로 돌고~ 반대쪽으로 돌고~ 돌면서 즐기는 짜릿한 즐거움! ",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180608082443947_1350.jpg",
//     people : "n명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "18",
//     title : "문보트(유료)" ,
//     description : "'석촌호수에 뜬 초승달 한 조각' 사랑하는 사람과 함께 특별한 추억을 남겨보세요",
//     image : "https://adventure.lotteworld.com/image/2022/5/202205031218195931_1350.png",
//     people : "5명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "19",
//     title : "드래곤 와일드슈팅" ,
//     description : " 기사로 멋지게 변신하여 위기에 빠진 로티성을 구해주세요!!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620072756030_1350.jpg",
//     people : "4명",
//     height : " 110cm~ " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "20",
//     title : "플라이벤처" ,
//     description : "온몸으로 짜릿한 하늘을 느끼며 대한민국의 명소와 판타지 세계를 만나보세요!",
//     image : "https://adventure.lotteworld.com/image/2023/5/202305090949284180_275.jpg",
//     people : "72명",
//     height : "140cm~195cm" ,
//     location : "어드벤처 1층"

// },
// {
//     id : "21",
//     title : "3D 황야의 무법자 Ⅱ" ,
//     description : "말 모양의 시뮬레이터를 타고 3D로 선보이는 서부 광산에서 악당을 물리치세요! 내가 바로 일등 보안관~",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620080733752_1350.jpg",
//     people : "34명",
//     height : " 120cm 이상" ,
//     location : "어드벤처 1층"

// },
// {
//     id : "22",
//     title : "후렌치레볼루션" ,
//     description : "롯데월드 어드벤처의 대표 롤러코스터! 짜릿한 하강과 정신이 아득해지는 원형 트랙에서 저세상 스릴을 느껴보세요!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180619103213086_1350.jpg",
//     people : "28명",
//     height : "120cm~ " ,
//     location : "어드벤처 2층 후렌치레볼루션"

// },
// {
//     id : "23",
//     title : "범퍼카(어드벤처)" ,
//     description : "앞에서 쾅~ 뒤에서 쾅~ 어디서 달려들지 모르는 좌충우돌 범퍼카! 부딪칠수록 즐거움이 더욱 커집니다",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620075326321_1350.jpg",
//     people : "1명",
//     height : "125cm~ " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "24",
//     title : "어크로스다크" ,
//     description : "무한한 에너지가 잠재되어 있는 큐브와 함께 20년 전 우주에서 실종된 아버지를 찾아 나서는 딸 '미아'의 스페이스 어드벤처",
//     image : "https://adventure.lotteworld.com/image/2019/2/201902080504441820_1350.jpg",
//     people : "100명",
//     height : "110cm~" ,
//     location : "어드벤처 1층"

// },
// {
//     id : "25",
//     title : "파라오의 분노" ,
//     description : "파라오의 보물을 찾아 떠나는 스릴만점 모션 다크 라이드!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180608062439554_1350.jpg",
//     people : "6명",
//     height : "110cm~195cm" ,
//     location : "어드벤처 4층"

// },
// {
//     id : "26",
//     title : "풍선비행" ,
//     description : "하늘 꼭대기에서 내려다본 작은 세계, 풍선을 타고 떠나 보세요! 롯데월드 최고의 전망코스~",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620074210983_1350.jpg",
//     people : "6명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "27",
//     title : "로티트레인" ,
//     description : "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620085130945_1350.jpg",
//     people : "16명",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "28",
//     title : "키즈토리아" ,
//     description : "어린이들이 맨발로 뛰어다니며 마음껏 즐길수 있는 거대한 동화속 세상",
//     image : "https://adventure.lotteworld.com/image/2023/5/202305090949284180_275.jpg",
//     people : "제한없음",
//     height : " 제한없음 " ,
//     location : "어드벤처 1층"

// },
// {
//     id : "29",
//     title : "쁘띠빵빵" ,
//     description : "유럽풍 클래식 자동차를 타고 호수가를 달리는 상쾌한 레이스 한판.",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620083315338_1350.jpg",
//     people : "4명",
//     height : "110cm~140cm " ,
//     location : "매직아일랜드 매직캐슬 뒤편"

// },
// {
//     id : "30",
//     title : "환타지드림" ,
//     description : "지하탐험 환상열차를 타고 달콤한 캔디와 귀여운 동물 인형들이 반기는 환상의 나라로! 꿈속을 달리는 즐거움을 만끽하세요~",
//     image : "https://adventure.lotteworld.com/image/2023/5/202305090949284180_275.jpg",
//     people : "6명",
//     height : "110cm~ " ,
//     location : "매직아일랜드 자이로드롭 좌측"

// },
// {
//     id : "31",
//     title : "언더씨킹덤" ,
//     description : "해저왕국의 바닷 속 세상을 마음껏 뛰어놀며 모래성도 쌓고 다양한 미디어 아트 플레이를 해보아요!!",
//     image : "https://adventure.lotteworld.com/image/2023/5/202305090949284180_275.jpg",
//     people : "50명",
//     height : " 125cm이하 보호자 동반시 이용가능" ,
//     location : "어드벤처 1층 키디존 내"

// },
// {
//     id : "32",
//     title : "어린이 범퍼카" ,
//     description : "앞에서 쾅~ 뒤에서 쿵~ 부딪힐 때마다 터지는 아이들의 즐거운 환호성! 피하지 말고 과감하게 돌진~",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620074656081_1350.jpg",
//     people : "20명",
//     height : "110cm~125cm " ,
//     location : "어드벤처 1층 키디존 내"

// },
// {
//     id :"33",
//     title : "점핑피쉬" ,
//     description : "거대한 조개를 지나 다양한 물고기 친구들과 로티 로리와 함께 떠나는 신나는 해저여행 !!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620080901912_1350.jpg",
//     people : "24명",
//     height : "110cm~140cm" ,
//     location : "어드벤처 1층"

// },
// {
//     id : "34",
//     title : "유레카" ,
//     description : "하늘을 나는 꼬마 요술 배 '유레카'를 타고 구름 위를 날아보세요! 하늘을 나는 기분을 만끽할 수 있어요.",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620075105647_1350.jpg",
//     people : "20명",
//     height : " 110cm~140cm" ,
//     location : "어드벤처 1층 키디존 내"

// },
// {
//     id : "35",
//     title : "햇님달님" ,
//     description : "호랑이를 피해 햇님달님 오누이와 하늘 위로 점프! 스릴 만점의 신나는 개구쟁이 탑승물!",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620073846929_1350.jpg",
//     people : "13명",
//     height : "90cm~140cm  " ,
//     location : "어드벤처 1층 키디존 내"

// },
// {
//     id : "36",
//     title : "스윙팡팡" ,
//     description : "로티와 친구들과 함께 빙글빙글 돌아가는 바구니를 타고 동화나라를 방문했어요. 위, 아래로 퉁! 퉁! 튕기는 재미가 가득",
//     image : "https://adventure.lotteworld.com/image/2018/6/20180620080645456_1350.jpg",
//     people : "18명",
//     height : "110cm~140cm" ,
//     location : "어드벤처 1층"

// }
// )