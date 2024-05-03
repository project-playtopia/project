import connect from "./connect.js";
import LotteWorld from './schemas/lotteWorldSchemas.js'
import EverLand from './schemas/everLandSchemas.js';
// import SeoulLand from './schemas/seoulLandSchemas.js'
connect();

// await LotteWorld.create({
//     여러개 데이터
// })

// await EverLand.create({
//     여러개 데이터
// })

// await SeoulLand.create({
//     여러개 데이터
// })

// LotteWorld 초기 데이터 삽입
const lotteWorldAttractions = await LotteWorld.create(
    {
        id: 1,
        title: "슬릭스튜디오",
        description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
        location: '어드벤처 4층',
    },
    {
        id: 2,
        title: "배틀그라운드 월드 에이전트",
        description: "배틀그라운드 전장 속에서 살아남기 위해, 적들에 맞서 이 섬을 탈출해라!",
        location: '매직 아일랜드',
    },
    {
        id: 3,
        title: "카트라이더 레이싱월드",
        description: "게임 속에서만 즐기던 카트라이더를 이젠 롯데월드에서 직접 타면서 즐겨보세요!",
        location: '어드벤처 1층',
    },
    {
        id: 4,
        title: "월드 모노레일",
        description: "깜찍한 로티, 로리로 변신한 열차! 새로워진 월드모노레일을 만나보세요.",
        location: '어드벤처 3층',
    },
    {
        id: 5,
        title: "자이로드롭",
        description: "구름이 맞닿을 듯한 높이까지 올라갔다 한 순간에 떨어지는 스릴만점 어트랙션입니다.",
        location: '매직아일랜드',
    },
    {
        id: 6,
        title: "자이로스윙",
        description: "40여명이 둘러앉은 거대한 회전기구가 시계추처럼 움직여 새로운 공포를 느낄 수 있습니다.",
        location: '매직아일랜드',
    },
    {
        id: 7,
        title: "자이로스핀",
        description: "아시아 최초 저소음 무진동 회전 어트랙션! 입이 쩍~ 벌어지는 놀라운 스피드를 경험해 보세요!",
        location: '매직아일랜드',
    },
    {
        id: 8,
        title: "아트란티스",
        description: "최고 스릴 어트랙션! 시속 72km로 출발하는 보트를 타고 미스터리 신전 속으로 여행을 떠나보세요!",
        location: '매직아일랜드',
    },
    {
        id: 9,
        title: "혜성특급",
        description: "좌우로 회전하는 롤러코스터를 타고 떠나는 어둠 속 스펙터클 우주여행 !",
        location: '매직아일랜드',
    },
    {
        id: 10,
        title: "번지드롭",
        description: "높이 38m의 짜릿함과 시속 90km로 추락 할 때의 스릴! 끝났구나 하고 안심하는 순간 한번 더~ 30초간 반복되는 번지드롭!",
        location: '매직아일랜드',
    },
    {
        id: 11,
        title: "회전그네",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 12,
        title: "머킹의 회전목마",
        description: "머킹 왕실의 해마와 바다 생물들을 타며 즐기는 축제 한 마당",
        location: '매직아일랜드',
    },
    {
        id: 13,
        title: "스페인 해적선",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 14,
        title: "신밧드의 모험",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 15,
        title: "회전목마",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 16,
        title: "후룸라이드",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 17,
        title: "회전바구니",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 18,
        title: "문보트 (유료)",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 19,
        title: "드래곤 와일드슈팅",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 20,
        title: "플라이벤처",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 21,
        title: "황야의 무법자",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 22,
        title: "후렌치레볼루션",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 2층',
    },
    {
        id: 23,
        title: "범퍼카 (어드벤처)",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 2층',
    },
    {
        id: 24,
        title: "어크로스다크",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 25,
        title: "파라오의 분노",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 26,
        title: "풍선비행",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 27,
        title: "로티트레인",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 28,
        title: "키즈토리아",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 29,
        title: "쁘띠빵빵",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 30,
        title: "환타지드림",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 31,
        title: "언더씨킹덤",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 32,
        title: "어린이 범퍼카",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 33,
        title: "점핑피쉬",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 34,
        title: "유레카",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 35,
        title: "햇님달님",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 36,
        title: "스윙팡팡",
        discription: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
);

const lotteWorldAttractionsDatas = await LotteWorld.find();

console.log('화면으로 보낼 attrationcs', lotteWorldAttractionsDatas)


// 에버랜드
const everlandAttractions = await EverLand.create([
    {
        id: 1,
        title: "에버랜드",
        description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
        location: '어드벤처 4층',
    },
    {
        id:2,
        title: "배틀그라운드 월드 에이전트",
        description: "배틀그라운드 전장 속에서 살아남기 위해, 적들에 맞서 이 섬을 탈출해라!",
        location: '매직 아일랜드',
    },
    {
        id: 3,
        title: "카트라이더 레이싱월드",
        description: "게임 속에서만 즐기던 카트라이더를 이젠 롯데월드에서 직접 타면서 즐겨보세요!",
        location: '어드벤처 1층',
    },
    {
        id: 4,
        title: "월드 모노레일",
        description: "깜찍한 로티, 로리로 변신한 열차! 새로워진 월드모노레일을 만나보세요.",
        location: '어드벤처 3층',
    },
    {
        id: 5,
        title: "자이로드롭",
        description: "구름이 맞닿을 듯한 높이까지 올라갔다 한 순간에 떨어지는 스릴만점 어트랙션입니다.",
        location: '매직아일랜드',
    },
    {
        id: 6,
        title: "자이로스윙",
        description: "40여명이 둘러앉은 거대한 회전기구가 시계추처럼 움직여 새로운 공포를 느낄 수 있습니다.",
        location: '매직아일랜드',
    },
    {
        id: 7,
        title: "자이로스핀",
        description: "아시아 최초 저소음 무진동 회전 어트랙션! 입이 쩍~ 벌어지는 놀라운 스피드를 경험해 보세요!",
        location: '매직아일랜드',
    },
    {
        id: 8,
        title: "아트란티스",
        description: "최고 스릴 어트랙션! 시속 72km로 출발하는 보트를 타고 미스터리 신전 속으로 여행을 떠나보세요!",
        location: '매직아일랜드',
    },
    {
        id: 9,
        title: "혜성특급",
        description: "좌우로 회전하는 롤러코스터를 타고 떠나는 어둠 속 스펙터클 우주여행 !",
        location: '매직아일랜드',
    },
    {
        id: 10,
        title: "번지드롭",
        description: "높이 38m의 짜릿함과 시속 90km로 추락 할 때의 스릴! 끝났구나 하고 안심하는 순간 한번 더~ 30초간 반복되는 번지드롭!",
        location: '매직아일랜드',
    },
    {
        id: 11,
        title: "회전그네",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 12,
        title: "머킹의 회전목마",
        description: "머킹 왕실의 해마와 바다 생물들을 타며 즐기는 축제 한 마당",
        location: '매직아일랜드',
    },
    {
        id: 13,
        title: "스페인 해적선",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 14,
        title: "신밧드의 모험",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 15,
        title: "회전목마",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 16,
        title: "후룸라이드",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 17,
        title: "회전바구니",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 18,
        title: "문보트 (유료)",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 19,
        title: "드래곤 와일드슈팅",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 20,
        title: "플라이벤처",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 21,
        title: "황야의 무법자",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 22,
        title: "후렌치레볼루션",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 2층',
    },
    {
        id: 23,
        title: "범퍼카 (어드벤처)",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 2층',
    },
    {
        id: 24,
        title: "어크로스다크",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 25,
        title: "파라오의 분노",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 26,
        title: "풍선비행",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 4층',
    },
    {
        id: 27,
        title: "로티트레인",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 28,
        title: "키즈토리아",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '어드벤처 1층',
    },
    {
        id: 29,
        title: "쁘띠빵빵",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 30,
        title: "환타지드림",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '매직아일랜드',
    },
    {
        id: 31,
        title: "언더씨킹덤",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 32,
        title: "어린이 범퍼카",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 33,
        title: "점핑피쉬",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 34,
        title: "유레카",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 35,
        title: "햇님달님",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
    {
        id: 36,
        title: "스윙팡팡",
        description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
        location: '키디존',
    },
]);

const everlandAttractionsDatas = await EverLand.find();

console.log('화면으로 보낼 attrationcs', everlandAttractionsDatas)