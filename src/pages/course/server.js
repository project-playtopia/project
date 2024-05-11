import express from 'express';
import connect from './connect.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import courseSchema from './courseSchema.js';
import router from './router.js';

connect()
const app = express();
const port = 8000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

// const courseData = [
//   {
//     "id":0,
//     "company":"롯데월드",
//     "courseName":"우산코스",
//     "attractionName":"회전바구니",
//     "height":"110cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180608082450762_275.jpg"
//   },
//   {
//     "id":1,
//     "company":"롯데월드",
//     "courseName":"우산코스",
//     "attractionName":"파라오의 분노",
//     "height":"120cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2021/4/202104230348170190_275.jpg"
//   },
//   {
//     "id":2,
//     "company":"롯데월드",
//     "courseName":"우산코스",
//     "attractionName":"풍선비행",
//     "height":"제한 없음",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620074206373_275.jpg"
//   },
//   {
//     "id":3,
//     "company":"롯데월드",
//     "courseName":"우산코스",
//     "attractionName":"와일드 밸리",
//     "height":"110cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620082816253_275.jpg"
//   },
//   {
//     "id":4,
//     "company":"롯데월드",
//     "courseName":"우산코스",
//     "attractionName":"후룸라이드",
//     "height":"제한 없음",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180614061205013_275.jpg"
//   },
//   {
//     "id":5,
//     "company":"롯데월드",
//     "courseName":"어린이코스",
//     "attractionName":"키즈토리아",
//     "height":"제한 없음",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620075506061_275.jpg"
//   },
//   {
//     "id":6,
//     "company":"롯데월드",
//     "courseName":"어린이코스",
//     "attractionName":"쁘띠빵빵",
//     "height":"110cm 이하",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620083306346_275.jpg"
//   },
//   {
//     "id":7,
//     "company":"롯데월드",
//     "courseName":"어린이코스",
//     "attractionName":"어린이범퍼카",
//     "height":"125cm 이하",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620074631202_275.jpg"
//   },
//  {
//       "id":8,
//       "company":"롯데월드",
//       "courseName":"어린이코스",
//       "attractionName":"햇님달님",
//       "height":"90cm~140cm",
//       "img":"https://adventure.lotteworld.com/image/2018/6/20180620073834101_275.jpg"
//     },
//   {
//     "id":9,
//     "company":"롯데월드",
//     "courseName":"어린이코스",
//     "attractionName":"머킹의 회전목마",
//     "height":"105cm 이하",
//     "img":"https://adventure.lotteworld.com/image/2020/11/202011161056525390_275.jpg"
//   },
//   {
//     "id":10,
//     "company":"롯데월드",
//     "courseName":"스릴코스",
//     "attractionName":"스페인해적선",
//     "height":"110cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/7/201807251058248710_275.jpg"
//   },
//   {
//     "id":11,
//     "company":"롯데월드",
//     "courseName":"스릴코스",
//     "attractionName":"후렌치레볼루션",
//     "height":"120cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180619103158398_275.jpg"
//   },
//   {
//     "id":12,
//     "company":"롯데월드",
//     "courseName":"스릴코스",
//     "attractionName":"자이로스윙",
//     "height":"130cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180614033610833_275.jpg"
//   },
//   {
//     "id":13,
//     "company":"롯데월드",
//     "courseName":"스릴코스",
//     "attractionName":"아틀란티스",
//     "height":"130cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180614033556306_275.jpg"
//   },
//   {
//     "id":14,
//     "company":"롯데월드",
//     "courseName":"멀미코스",
//     "attractionName":"회전그네",
//     "height":"120cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180620073640138_275.jpg"
//   },
//   {
//     "id":15,
//     "company":"롯데월드",
//     "courseName":"멀미코스",
//     "attractionName":"회전목마",
//     "height":"제한 없음",
//     "img":"https://adventure.lotteworld.com/image/2018/6/20180619090610881_275.jpg"
//   },
//   {
//     "id":16,
//     "company":"롯데월드",
//     "courseName":"멀미코스",
//     "attractionName":"혜성특급",
//     "height":"110cm 이상",
//     "img":"https://adventure.lotteworld.com/image/2021/4/202104230354178030_275.jpg"
//   },
// {
//       "id":17,
//       "company":"롯데월드",
//       "courseName":"멀미코스",
//       "attractionName":"로티트레인",
//       "height":"제한 없음",
//       "img":"https://adventure.lotteworld.com/image/2018/6/20180620085125664_275.jpg"
//     },
//   {
//       "id":18,
//       "company":"롯데월드",
//       "courseName":"멀미코스",
//       "attractionName":"자이로스핀",
//       "height":"125cm 이상",
//       "img":"https://adventure.lotteworld.com/image/2018/6/20180614061126354_275.jpg"
//     },
//    {
//       "id":19,
//       "company":"에버랜드",
//       "courseName":"동물과함께코스",
//       "attractionName":"판타스틱 윙스",
//       "height":"제한 없음",
//       "img":"https://www.everland.com/contents/ia/facilities/e67618524d1a4d86a929590afb2ec0fe.jpg"
//     },
//    {
//       "id":20,
//       "company":"에버랜드",
//       "courseName":"동물과함께코스",
//       "attractionName":"씨라이언 빌리지 애니멀톡",
//       "height":"제한 없음",
//       "img":"https://www.everland.com/contents/ia/facilities/d6c0109bb32340cb880727e97413122a.jpg"
//     },
//    {
//       "id":21,
//       "company":"에버랜드",
//       "courseName":"동물과함께코스",
//       "attractionName":"타이거밸리",
//       "height":"제한 없음",
//       "img":"https://www.everland.com/contents/ia/facilities/94599f884e41467cba17c4e0ae35a75e.png"
//     },
//    {
//       "id":22,
//       "company":"에버랜드",
//       "courseName":"동물과함께코스",
//       "attractionName":"사파리 월드",
//       "height":"제한 없음",
//       "img":"https://www.everland.com/contents/ia/facilities/1e858cc7d9bc4f84999d2a2cdb8fd569.jpg"
//     },
//    {
//       "id":23,
//       "company":"에버랜드",
//       "courseName":"동물과함께코스",
//       "attractionName":"바오 하우스",
//       "height":"제한 없음",
//       "img":"https://www.everland.com/contents/ia/facilities/effc294661ca478a84722c144aa98bb9.jpg"
//     },
//     {
//       "id":24,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"비룡열차",
//       "height":"110cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/ad032ce382164ecc97814a7be2f23260.jpg"
//     },
//     {
//       "id":25,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"매직 스윙",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/f7ea75fed93e4a8ea4a4a897b6cd7816.jpg"
//     },
//     {
//       "id":26,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"피터팬",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/1ce95ca306514eb68a46b1bbfd3870ab.jpg"
//     },
//     {
//       "id":27,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"릴리댄스",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/42520a11026c4eb88409bf5cf8be6e1b.jpg"
//     },
//     {
//       "id":28,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"붕붕카",
//       "height":"80cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/ea630d89af9543acbf696eb4e1d0f2a1.jpg"
//     },
//     {
//       "id":29,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"스카이댄싱",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/e56050dcddae4d4cb749ecf791f25368.jpg"
//     },
//     {
//       "id":30,
//       "company":"에버랜드",
//       "courseName":"어린이코스",
//       "attractionName":"로얄 쥬빌리 캐로셀",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/6db1b0923a4442e1938122a227bc4a76.jpg"
//     },
//     {
//       "id":31,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"레이싱 코스터",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/9cd533ef12cf48ef8da59b67bfe063b0.jpg"
//     },
//     {
//       "id":32,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"썬더폴스",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/31ba613c583b4162bf7a7d4634fb049c.jpg"
//     },
//     {
//       "id":33,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"허리케인",
//       "height":"130cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/d668abc9c1734a42970df39cdbca847c.jpg"
//     },
//     {
//       "id":34,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"더블락스핀",
//       "height":"140cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/c97ea7fd986042f0a07e7a411fff61cc.jpg"
//     },
//     {
//       "id":35,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"롤링 엑스 트레인",
//       "height":"120cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/34e41b85e6284bad90e215a52c1303d8.jpg"
//     },
//     {
//       "id":36,
//       "company":"에버랜드",
//       "courseName":"스릴코스",
//       "attractionName":"T익스프레스",
//       "height":"130cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/4adc39fc35ee4b4db340ae217af80699.jpg"
//     },
//     {
//       "id":37,
//       "company":"에버랜드",
//       "courseName":"워터코스",
//       "attractionName":"아마존 익스프레스",
//       "height":"130cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/3cd7920cfdf54b9d8bc910d166974038.jpg"
//     },
//     {
//       "id":38,
//       "company":"에버랜드",
//       "courseName":"워터코스",
//       "attractionName":"썬더폴스",
//       "height":"100cm 이상",
//       "img":"https://www.everland.com/contents/ia/facilities/31ba613c583b4162bf7a7d4634fb049c.jpg"
//     },
//     {
//       "id":39,
//       "company":"에버랜드",
//       "courseName":"워터코스",
//       "attractionName":"포시즌스 가든",
//       "height":"제한없음",
//       "img":"https://www.everland.com/contents/ia/facilities/660f4d09e4b74de091f398b1629e46d4.jpg"
//     },
//     {
//       "id":40,
//       "company":"서울랜드",
//       "courseName":"캐릭터코스",
//       "attractionName":"티키톡 열차",
//       "height":"100cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650343684_0.webp"
//     },
//     {
//       "id":41,
//       "company":"서울랜드",
//       "courseName":"캐릭터코스",
//       "attractionName":"구름빵",
//       "height":"100cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518169_0.webp"
//     },
//     {
//       "id":42,
//       "company":"서울랜드",
//       "courseName":"캐릭터코스",
//       "attractionName":"깜부비행기",
//       "height":"110cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518055_0.webp"
//     },
//     {
//       "id":43,
//       "company":"서울랜드",
//       "courseName":"캐릭터코스",
//       "attractionName":"라바 트위스터",
//       "height":"100cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342552_0.webp"
//     },
//     {
//       "id":44,
//       "company":"서울랜드",
//       "courseName":"캐릭터코스",
//       "attractionName":"출동! 슈퍼윙스",
//       "height":"80cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342582_0.webp"
//     },
//     {
//       "id":45,
//       "company":"서울랜드",
//       "courseName":"어린이코스",
//       "attractionName":"쥬라기랜드",
//       "height":"제한없음",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342739_0.webp"
//     },
//     {
//       "id":46,
//       "company":"서울랜드",
//       "courseName":"어린이코스",
//       "attractionName":"베스트키즈",
//       "height":"125cm 이하",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342841_0.webp"
//     },
//     {
//       "id":47,
//       "company":"서울랜드",
//       "courseName":"어린이코스",
//       "attractionName":"빅회전목마",
//       "height":"100cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650337319_0.webp"
//     },
//     {
//       "id":48,
//       "company":"서울랜드",
//       "courseName":"어린이코스",
//       "attractionName":"카트라이더범퍼",
//       "height":"100cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1621843921_0.webp"
//     },
//     {
//       "id":49,
//       "company":"서울랜드",
//       "courseName":"어린이코스",
//       "attractionName":"둥실비행선",
//       "height":"제한없음",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650337304_0.webp"
//     },
//     {
//       "id":50,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"블랙홀 2000",
//       "height":"120cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342764_0.webp"
//     },
//     {
//       "id":51,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"도깨비바람",
//       "height":"140cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342726_0.webp"
//     },
//     {
//       "id":52,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"월드컵",
//       "height":"130cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342710_0.webp"
//     },
//     {
//       "id":53,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"스카이엑스",
//       "height":"120cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518069_0.webp"
//     },
//     {
//       "id":54,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"은하철도 888",
//       "height":"120cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342777_0.webp"
//     },
//     {
//       "id":55,
//       "company":"서울랜드",
//       "courseName":"스릴코스",
//       "attractionName":"킹바이킹",
//       "height":"110cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650342753_0.webp"
//     },
//     {
//       "id":56,
//       "company":"서울랜드",
//       "courseName":"우산코스",
//       "attractionName":"해적소굴",
//       "height":"80cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518132_0.webp"
//     },
//     {
//       "id":57,
//       "company":"서울랜드",
//       "courseName":"우산코스",
//       "attractionName":"도레미악단",
//       "height":"80cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518153_0.webp"
//     },
//     {
//       "id":58,
//       "company":"서울랜드",
//       "courseName":"우산코스",
//       "attractionName":"록카페",
//       "height":"110cm 이상",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1650518023_0.webp"
//     },
//     {
//       "id":59,
//       "company":"서울랜드",
//       "courseName":"우산코스",
//       "attractionName":"앨리스 원더하우스",
//       "height":"제한없음",
//       "img":"https://seoulland.co.kr/_File/facility/attraction//thumbnailImgFile_1682061654_0.webp"
//     },
//     {
//       "id":60,
//       "company":"롯데월드",
//       "courseName":"우산코스",
//       "attractionName":"어크로스다크",
//       "height":"110cm 이상",
//       "img":"https://adventure.lotteworld.com/image/2019/2/201902080504527620_275.jpg"
//     },
//     {
//       "id":61,
//       "company":"롯데월드",
//       "courseName":"우산코스",
//       "attractionName":"월드모노레일",
//       "height":"제한없음",
//       "img":"https://adventure.lotteworld.com/image/2022/5/202205090153288960_275.jpg"
//     },
//     {
//       "id":62,
//       "company":"롯데월드",
//       "courseName":"어린이코스",
//       "attractionName":"유레카",
//       "height":"110cm이상",
//       "img":"https://adventure.lotteworld.com/image/2018/6/20180620075027296_275.jpg"
//     }
// ]

// courseSchema.insertMany(courseData)
// .then(()=>{
//   console.log('등록')
// })
// .catch((err)=>{
//   console.error('등록에러',err)
// })

app.use(bodyParser.json())
app.use('/course', router);
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
