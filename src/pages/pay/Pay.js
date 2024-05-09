import React, { useEffect, useState } from 'react';
import S from './style.js';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import e from 'cors';

const Pay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemId, explainInfo, period } = { ...location.state };
  const [ benefitInfo, setBenefitInfo ] = useState({});
  const getBenefitInfo = async () => {
    const res = await fetch(`http://localhost:8000/benefit/find/?benefitId=${itemId}`);
    const data = await res.json();
    setBenefitInfo(data);
    // console.log(data);
  }

  const formedExplainInfo = [];
  explainInfo.forEach((e)=>{
    formedExplainInfo.push(...e);
  });
  const [countArr, setCountArr] = useState(Array.from({length: formedExplainInfo.length}, ()=> 0));
  const [entireCnt, setEntireCnt] = useState(0);
  const [entirePrice, setEntirePrice] = useState(0);
  const [entireOriginalPirce, setEntireOriginalPrice] = useState(0);
  const [entireDiscountedPrice, setEntireDiscountedPrice] = useState(0);

  const onClickToAdd = (index) => {
    setCountArr(countArr.map((e, i)=> (index == i) ? ++e : e));
  }

  const onClickToMinus = (index) => {
    setCountArr(countArr.map((e, i)=> (e && index == i) ? --e : e));
  }

  const onClickToPay = () => {
    if(countArr.filter(e => e === 0).length === countArr.length){
      return alert('구매할 이용권을 선택하세요');
    }else if (document.getElementById("paywayselector").value === "none"){
      return alert('결제 방법을 선택해주세요');
    }else if (window.confirm('결제하시겠습니까?')){
      alert('결제를 완료하였습니다.')
      navigate(`/benefit/explain?itemId=${itemId}`, {
        state: {
          itemId: itemId,
          price: entirePrice,
        },
      })
    }else{
      return alert('구매를 취소하였습니다.');
    }
    
  }
  
  useEffect(()=>{
    let tempCnt = 0;
    let tempPrice = 0;
    let tempOriginalPrice = 0;
    let tempDiscountedPrice = 0;
    countArr.forEach((e, i)=>{
      tempCnt += e;
      tempPrice += e * formedExplainInfo[i].discounted_price;
      tempOriginalPrice += e * formedExplainInfo[i].original_price;
      tempDiscountedPrice += e * (formedExplainInfo[i].original_price - formedExplainInfo[i].discounted_price);
    })
    setEntireCnt(tempCnt);
    setEntirePrice(tempPrice);
    setEntireOriginalPrice(tempOriginalPrice);
    setEntireDiscountedPrice(tempDiscountedPrice);
  },[countArr])

  useEffect(()=>{
    getBenefitInfo();
  },[]);
  
  if (itemId) {
    return (
      <div className='notosanskr'>
        <S.Container>
          <S.Header1>결제</S.Header1>
          <S.PayGrid>
            <S.ItemWrapper>
              <S.ItemImg src={benefitInfo.img} />
              <S.ItemTitle>{benefitInfo.title}</S.ItemTitle>
            </S.ItemWrapper>
            <S.PayWrapper>
              <S.Section>
                <S.Header5>사용 기간</S.Header5>
                <S.Description>{period}</S.Description> 
              </S.Section>
              <S.Section>
                <S.Header5>권종 선택</S.Header5>
                {
                  formedExplainInfo.map((rows, index)=>(
                    <S.TicketSelector>
                      <S.TicketTitle>
                        {rows.title}
                      </S.TicketTitle>
                      <S.TicketPriceContainer>
                        <S.Disconted>{rows.discounted_price.toLocaleString('ko-KR')}원</S.Disconted>
                        <S.Original>{rows.original_price.toLocaleString('ko-KR')}원</S.Original>
                      </S.TicketPriceContainer>
                      <S.TicketBtnContainer>
                        <S.TicketCntBtn onClick={()=>{onClickToMinus(index)}}>-</S.TicketCntBtn>
                        <S.TicketCnt>{countArr[index]}</S.TicketCnt>
                        <S.TicketCntBtn onClick={()=>{onClickToAdd(index)}} style={{color: "#1fb1d9"}}>+</S.TicketCntBtn>
                      </S.TicketBtnContainer>
                    </S.TicketSelector>
                  ))
                }
                <S.TicketSummary>
                  <S.TicketEntire>총 수량 : <span className="subcolor">{entireCnt}</span> 개</S.TicketEntire>
                  <S.TicketEntire><span className="subcolor">{entirePrice.toLocaleString('ko-KR')}</span>원</S.TicketEntire>
                </S.TicketSummary>
              </S.Section>
              <S.Section>
                <S.Header5>취소 / 환불 규정</S.Header5>
                <S.Description>
                  <S.UnorderedList>
                    <li>상품 종료일까지 사용하지 않은 예매는 수수료 없이 100% 환불 받으실 수 있습니다.</li>
                    <li>이용하지 않은 예매는 상품 종료 21시 이후에 자동 환불 처리 됩니다.</li>
                  </S.UnorderedList>
                </S.Description>
              </S.Section>
              <S.Section>
                <S.PriceSummary>
                  <S.CostExplainGrid>
                    <S.CostExplainTitle>정상가 합계</S.CostExplainTitle>
                    <S.Dotted></S.Dotted>
                    <S.CostExplainPrice>{entireOriginalPirce.toLocaleString('ko-KR')}원</S.CostExplainPrice>
                    <S.CostExplainTitle>할인된 금액</S.CostExplainTitle>
                    <S.Dotted></S.Dotted>
                    <S.CostExplainPrice>{entireDiscountedPrice.toLocaleString('ko-KR')}원</S.CostExplainPrice>
                    <S.CostExplainTitle>총 합계</S.CostExplainTitle>
                    <S.Dotted></S.Dotted>
                    <S.CostExplainPrice><span className="subcolor">{entirePrice.toLocaleString('ko-KR')}</span>원</S.CostExplainPrice>
                  </S.CostExplainGrid>
                </S.PriceSummary>
                <S.SelectorWrapper>
                  <S.PayWaySelector id="paywayselector">
                    <option defaultChecked="true" hidden="ture" value="none">결제 수단을 선택해주세요</option>
                    <option value="creditcard">신용카드</option>
                    <option value="naverpay">네이버페이</option>
                    <option value="kakaopay">카카오페이</option>
                    <option value="deposit">무통장입금</option>
                  </S.PayWaySelector>
                </S.SelectorWrapper>
              </S.Section>
              <S.BtnWrapper>
                <S.ButtonToPay onClick={onClickToPay}>결제하기</S.ButtonToPay>
              </S.BtnWrapper>
            </S.PayWrapper>
          </S.PayGrid>
        </S.Container>
      </div>
    );
  } else {
    alert("잘못된 접근입니다.");
    return (
      <Navigate to={"/"} />
    );
    
  }

};

export default Pay;