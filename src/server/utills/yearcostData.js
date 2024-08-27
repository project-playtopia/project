const yearcostInsert = await yearcostBenefitSchema.create(
  {
    title: "장애인 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280234025020.jpg",
  },
  {
    title: "생일자 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280231098450.jpg",
  },
  {
    title: "그룹사 임직원 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280235406270.jpg",
  },
  {
    title: "롯데월드 임직원 추천 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280256369530.jpg",
  },
  {
    title: "신규가입",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280229108290.jpg",
  },
  {
    title: "다자녀 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280304288600.jpg",
  },
  {
    title: "인근 지역주민 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280306222200.jpg",
  },
  {
    title: "연간이용 패키지권 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/3/202403280308112670.jpg",
  },
  {
    title: "24년도 함께해요 연간이용!(재가입 우대)",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2025-01-29",
    img: "https://adventure.lotteworld.com/image/2024/4/202404240319521780.jpg",
  },
  {
    title: "지인 추천 우대",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/4/202404250214002150.jpg",
  },
  {
    title: "해피 월드 패밀리",
    company: "lotteworld",
    start_at: "2024-05-01",
    end_at:"2024-05-31",
    img: "https://adventure.lotteworld.com/image/2024/4/202404240318268030.jpg",
  },
);

const yearcostExplainInsert = await yearcostBenefitExplainSchema.create(
  {
    ref_id: '6652ff5b3c2ff6257cd9fd09',
    description: '장애인 본인 + 동반 2인',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd0c',
    description: '롯데월드 임직원 추천으로 가입하는 연간이용 신규 고객 + 동반 3인',
    contents: [
      {
        title: "골드권",
        original_price: "290,000",
        discounted_price: "232,000",
      },
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
      {
        title: "그린권 베이비",
        original_price: "110,000",
        discounted_price: "88,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd11',
    description: '만료 3개월 전 또는 만료 후 1년 이내 회원',
    contents: [
      {
        title: "골드권",
        original_price: "290,000",
        discounted_price: "203,000",
      },
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "175,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "126,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "119,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd0b',
    description: '롯데그룹사 임직원 및 직계가족',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "150,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "108,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "102,000",
      },
      {
        title: "그린권 베이비",
        original_price: "110,000",
        discounted_price: "66,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd12',
    description: '지인의 추천으로 가입하는 연간이용 신규 고객 + 동반 3인',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
      {
        title: "그린권 베이비",
        original_price: "110,000",
        discounted_price: "88,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd0e',
    description: '자녀 2인 이상 가족 우대',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
      {
        title: "그린권 베이비",
        original_price: "110,000",
        discounted_price: "88,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd0f',
    description: '증빙 서류 제시 시 우대 가능 (동반 3인까지)',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
      {
        title: "그린권 베이비",
        original_price: "110,000",
        discounted_price: "88,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd0a',
    description: '생일자 우대',
    contents: [
      {
        title: "그린권 어른",
        original_price: "250,000",
        discounted_price: "200,000",
      },
      {
        title: "그린권 어린이",
        original_price: "180,000",
        discounted_price: "144,000",
      },
      {
        title: "그린권 시니어",
        original_price: "170,000",
        discounted_price: "136,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd10',
    description: '어드벤처 연간이용권(그린권) + 아쿠아리움 연간이용권(마린 마스터)',
    contents: [
      {
        title: "어른",
        original_price: "380,000",
        discounted_price: "296,000",
      },
      {
        title: "어린이",
        original_price: "310,000",
        discounted_price: "240,000",
      },
    ]
  },
  {
    ref_id: '6652ff5b3c2ff6257cd9fd13',
    description: '2/3인 다인권 가입자',
    contents: [
      {
        title: "그린권 2인(대1 + 소1)",
        original_price: "430,000",
        discounted_price: "340,000",
      },
      {
        title: "그린권 3인(대2 + 소1)",
        original_price: "680,000",
        discounted_price: "538  ,000",
      },
    ]
  },
  
);