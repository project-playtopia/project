import connect from "./connect.js";
import LotteWorld from './schemas/lotteWorldSchemas.js'
import EverLand from './schemas/everLandSchemas.js';
import SeoulLand from './schemas/seoulLandSchemas.js'
connect();

// await LotteWorld.create({
//     여러개 데이터
// })

await EverLand.create({
    id: 1,
     title: "아마존 익스프레스",
     description: "많은 탐험가들이 호수 속에 잠들어 있는 황금을 차지하기 위해 보트 위에 몸을 맡겼다! ",
    location: '주토피아',

},
{
    id: 2,
     title: "썬더 폴스",
     description: "20미터의 국내 최고 낙하높이! 45도의 국내 최대 낙하각도! 국내 최초로 도입된 뒤로 떨어지는 백워드 드롭!",
    location: '매직랜드',

},
{
    id: 3,
     title: "롤링 엑스트레인",
     description: " 정신을 차릴 수 없는 롤러코스터의 정석, 롤링 엑스 트레인!",
    location: '아메리칸 어드벤처',

},
{
    id: 4,
     title: "허리케인",
     description: "미국 서부 시대 한 마을을 덮친 허리케인... 19미터 높이에서 회전하는 메가톤급 회오리 속에 몸을 맡겨 보는거야",
    location: '아메리칸 어드벤처',

},
{
    id: 5,
     title: "키즈 빌리지",
     description: "테마 별 체험을 통한 신체, 정서, 창의발달 프로그램을 4가지 테마로 경험하는 신개념 놀이터!",
    location: '매직랜드',

},
{
    id: 6,
     title: "매직 쿠키 하우스",
     description: "과자 집 콘셉트의 체험 공간 속에서 직접 몸으로 배우며 경험해요!",
    location: '매직랜드',

},
{
    id: 7,
     title: "로얄 쥬빌리 캐로셀",
     description: "백마 탄 왕자와 공주가 만난 중세 유럽 무도회장의 분위기는 어떨까? 환상의 꿈결 같은 동화 속 주인공이 되어보세요!",
    location: '유러피안 어드벤처',

},
{
    id: 8,
     title: "자동차왕국",
     description: "구불구불 신나는 언덕길 드라이브! 꼬마 운전사들에게 그야말로 자동차 왕국이네요~",
    location: '매직랜드',

},
{
    id: 9,
     title: "플래쉬 팡팡",
     description: "흐르는 음악과 함께 위로 아래로 동화속 엄지 공주가 되어 통통 튀는 의자에 앉아 신나게 놀아 보자구요!",
    location: '매직랜드',

},
{
    id: 10,
     title: "피터팬",
     description: "번쩍번쩍 불빛이 빛나는 탐험선을 타고 뒤쫓아오는 무서운 후크 선장을 따돌려라!!",
    location: '매직랜드',

},
{
    id: 11,
     title: "나는 코끼리",
     description: "분홍색, 하늘색 귀여운 생김새로 하늘을 나는 코끼리를 타고 빙글빙글~ 하늘을 날고 싶은 코끼리의 소원을 이뤄주세요!",
    location: '매직랜드',

},
{
    id: 12,
     title: "범퍼카",
     description: "어트랙션의 원조!누구든 멋진 레이서가 될 수 있어 항상 사랑받는 우리의 범퍼카~",
    location: '매직랜드',

},
{
    id: 13,
     title: "붕붕카",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '매직랜드',

},
{
    id: 14,
     title: " 매직 스윙",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 15,
     title: "비룡 열차",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '매직랜드',

},
{
    id: 16,
     title: "스푸키 펀 하우스",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '매직랜드',

},
{
    id: 17,
     title: "레이싱 코스터",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 18,
     title: "볼 하우스",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '매직랜드',

},
{
    id: 19,
     title: " 릴리 댄스",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 20,
     title: "플라잉 레스큐",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 21,
     title: "스페이스 투어 (4D어트랙션)",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 22,
     title: " 슈팅고스트",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 23,
     title: "T 익스프레스",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 24,
     title: "사파리월드",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 25,
     title: "로스트밸리",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 26,
     title: "판다월드",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 27,
     title: "콜럼버스 대탐험",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 28,
     title: "더블 락스핀",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 29,
     title: "렛츠 트위스트",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 30,
     title: "시크릿쥬쥬 비행기",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 31,
     title: "로보트카",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 32,
     title: "스카이 댄싱 ",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 33,
     title: "우주 전투기",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 34,
     title: "플레이 야드",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 35,
     title: " 페스티벌 트레인",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

},
{
    id: 36,
     title: "레니의 마법학교",
     description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
    location: '아메리칸 어드벤처',

}
)

// 서울랜드
await SeoulLand.create(
    {
    id :1,
    title : "둥실 비행선",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :2,
    title : "빅 회전목마",
    description : "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행! ",
    location : '캐릭터 타운'
    },
    {
    id :3,
    title : "월드컵",
    description : " 10개의 축구공 모양의 접시가 하늘로 치솟아 빙글빙글 돌면서 연인과 친구들에게 아찔한 시간을 제공합니다! ",
    location : '캐릭터 타운'
    },
    {
    id :4,
    title : " 도깨비 바람",
    description : "공중에서 사람들을 마구 떨어뜨려 버릴 것 같은 무시무시한 도깨비바람! ",
    location : '삼천리 동산'
    },
    {
    id :5,
    title : "쥬라기 랜드",
    description : "공룡 연구소를 테마로 만들어진 초대형 실내 공룡 체험관!  ",
    location : '캐릭터 타운'
    },
    {
    id :6,
    title : "킹바이킹",
    description : "  더 이상 말이 필요 없는 국민적인 놀이기구! ",
    location : '모험의 나라'
    },
    {
    id :7,
    title : "블랙홀 2000",
    description : "트위스트 2번! 초특급 우주열차! 은하계의 블랙홀을 통과하는 초특급 우주열차!  ",
    location : '미래의 나라'
    },
    {
    id :8,
    title : "라바 트위스터",
    description : "하늘을 나는 라바를 타고 우리 둘이~ 시원한 바람을 가르며 계절의 변화를 느껴보세요.",
    location : '캐릭터 타운'
    },
    {
    id :9,
    title : "은하열차 888",
    description : "수직하강과 원형레일을 반복! 두 바퀴 연속 회전은 스릴 짱! 서울랜드 또 하나의 대표적인 롤러코스터!",
    location : '미래의 나라'
    },
    {
    id :10,
    title : "베스트 키즈",
    description : "아이들이 마음껏 뛰놀 수 있는 베스트키즈! ",
    location : '삼천리 동산'
    },
    {
    id :11,
    title : "시티패럿",
    description : "귀여운 앵무새와 따뜻한 교감을 나눠보아요! ",
    location : '세계의 광장'
    },
    {
    id :12,
    title : "급류타기",
    description : "통나무 배에 몸을 싣고 물따라 길따라 여행을 떠나 보자고요~ ",
    location : '모험의 나라'
    },
    {
    id :13,
    title : "티키톡 열차",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :14,
    title : "출동 ! 슈퍼윙스",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :15,
    title : "브루미즈 동산",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :16,
    title : "앨리스 원더하우스",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :17,
    title : "터닝메카드 레이싱",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :18,
    title : "피터팬",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :19,
    title : "엑스 플라이어",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :20,
    title : " 알포스윙",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :21,
    title : "4D 깜짝모험관",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :22,
    title : "달나라 열차",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :23,
    title : "니나노 고카트",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :24,
    title : "타임머신 5D 360",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :25,
    title : "터닝메카드<br/> 고!범퍼카",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :26,
    title : "록카페",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :27,
    title : "샷드롭",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :28,
    title : "깜부 비행기",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :29,
    title : "스카이 엑스",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :30,
    title : "뭉게공항 액션존",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :31,
    title : "개구리 만세",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :32,
    title : "미니 바이킹",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :33,
    title : "해적소굴",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },
    {
    id :34,
    title : "도레미 악단",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :35,
    title : "구름빵",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '미래의 나라'
    },
    {
    id :36,
    title : "춤추는 요술집",
    description : "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    location : '캐릭터 타운'
    },



)

// LotteWorld 초기 데이터 삽입
// const lotteWorldAttractions = await LotteWorld.create(
//     {
//         id: 1,
//         title: "슬릭스튜디오",
//         description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요.",
//         location: '어드벤처 4층',
//     },
//     {
//         id: 2,
//         title: "배틀그라운드 월드 에이전트",
//         description: "배틀그라운드 전장 속에서 살아남기 위해, 적들에 맞서 이 섬을 탈출해라!",
//         location: '매직 아일랜드',
//     },
//     {
//         id: 3,
//         title: "카트라이더 레이싱월드",
//         description: "게임 속에서만 즐기던 카트라이더를 이젠 롯데월드에서 직접 타면서 즐겨보세요!",
//         location: '어드벤처 1층',
//     },
//     {
//         id: 4,
//         title: "월드 모노레일",
//         description: "깜찍한 로티, 로리로 변신한 열차! 새로워진 월드모노레일을 만나보세요.",
//         location: '어드벤처 3층',
//     },
//     {
//         id: 5,
//         title: "자이로드롭",
//         description: "구름이 맞닿을 듯한 높이까지 올라갔다 한 순간에 떨어지는 스릴만점 어트랙션입니다.",
//         location: '매직아일랜드',
//     },
//     {
//         id: 6,
//         title: "자이로스윙",
//         description: "40여명이 둘러앉은 거대한 회전기구가 시계추처럼 움직여 새로운 공포를 느낄 수 있습니다.",
//         location: '매직아일랜드',
//     },
//     {
//         id: 7,
//         title: "자이로스핀",
//         description: "아시아 최초 저소음 무진동 회전 어트랙션! 입이 쩍~ 벌어지는 놀라운 스피드를 경험해 보세요!",
//         location: '매직아일랜드',
//     },
//     {
//         id: 8,
//         title: "아트란티스",
//         description: "최고 스릴 어트랙션! 시속 72km로 출발하는 보트를 타고 미스터리 신전 속으로 여행을 떠나보세요!",
//         location: '매직아일랜드',
//     },
//     {
//         id: 9,
//         title: "혜성특급",
//         description: "좌우로 회전하는 롤러코스터를 타고 떠나는 어둠 속 스펙터클 우주여행 !",
//         location: '매직아일랜드',
//     },
//     {
//         id: 10,
//         title: "번지드롭",
//         description: "높이 38m의 짜릿함과 시속 90km로 추락 할 때의 스릴! 끝났구나 하고 안심하는 순간 한번 더~ 30초간 반복되는 번지드롭!",
//         location: '매직아일랜드',
//     },
//     {
//         id: 11,
//         title: "회전그네",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '매직아일랜드',
//     },
//     {
//         id: 12,
//         title: "머킹의 회전목마",
//         description: "머킹 왕실의 해마와 바다 생물들을 타며 즐기는 축제 한 마당",
//         location: '매직아일랜드',
//     },
//     {
//         id: 13,
//         title: "스페인 해적선",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 14,
//         title: "신밧드의 모험",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 15,
//         title: "회전목마",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 16,
//         title: "후룸라이드",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 17,
//         title: "회전바구니",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 18,
//         title: "문보트 (유료)",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 19,
//         title: "드래곤 와일드슈팅",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 20,
//         title: "플라이벤처",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 21,
//         title: "황야의 무법자",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 22,
//         title: "후렌치레볼루션",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 2층',
//     },
//     {
//         id: 23,
//         title: "범퍼카 (어드벤처)",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 2층',
//     },
//     {
//         id: 24,
//         title: "어크로스다크",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 4층',
//     },
//     {
//         id: 25,
//         title: "파라오의 분노",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 4층',
//     },
//     {
//         id: 26,
//         title: "풍선비행",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 4층',
//     },
//     {
//         id: 27,
//         title: "로티트레인",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 28,
//         title: "키즈토리아",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '어드벤처 1층',
//     },
//     {
//         id: 29,
//         title: "쁘띠빵빵",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '매직아일랜드',
//     },
//     {
//         id: 30,
//         title: "환타지드림",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '매직아일랜드',
//     },
//     {
//         id: 31,
//         title: "언더씨킹덤",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
//     {
//         id: 32,
//         title: "어린이 범퍼카",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
//     {
//         id: 33,
//         title: "점핑피쉬",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
//     {
//         id: 34,
//         title: "유레카",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
//     {
//         id: 35,
//         title: "햇님달님",
//         description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
//     {
//         id: 36,
//         title: "스윙팡팡",
//         discription: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
//         location: '키디존',
//     },
// );

// const lotteWorldAttractionsDatas = await LotteWorld.find();

// console.log('화면으로 보낼 attrationcs', lotteWorldAttractionsDatas)


