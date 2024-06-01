import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton.jsx';
import S from './style.js';

const LostnFoundRegisterSeoulland = () => {
  const [lostnseouland, setLostnSeoulland] = useState({
    item: '',
    found: '',
    content: '',
    no: null,
    result: "보관중",
    date: new Date().toISOString(),
    company: "seoulland"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLostnSeoulland({ ...lostnseouland, [name]: value });
  };

  

  useEffect(() => {
    fetch('http://localhost:8010/lostnfoundlist/list/')
      .then((res) => res.json())
      .then((data) => {
        const seoullandEntries = data.lostnfoundlist.filter(entry => entry.company === 'seoulland');
        const highestNo = seoullandEntries.reduce((max, item) => (item.no > max ? item.no : max), 0);
        setLostnSeoulland((prev) => ({
          ...prev,
          no: highestNo + 1,
        }));
      })
      .catch((error) => console.error('Error fetching lost and found list:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8010/lostnfoundexplain/list/')
      .then((res) => res.json())
      .then((data) => {
        const seoullandEntries = data.lostnfoundlist.filter(entry => entry.company === 'seoulland');
        const highestNo = seoullandEntries.reduce((max, item) => (item.no > max ? item.no : max), 0);
        setLostnSeoulland((prev) => ({
          ...prev,
          no: highestNo + 1,
        }));
      })
      .catch((error) => console.error('Error fetching lost and found list:', error));
  }, []);
 

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8010/lostnfoundexplain/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lostnseouland,
        date: new Date().toISOString(), 
      }),
    })
    .then((res) => {
      return res.json();
    })

    fetch('http://localhost:8010/lostnfoundlist/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lostnseouland,
        date: new Date().toISOString(), 
      }),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setLostnSeoulland((prevState) => ({
        ...prevState,
        no: prevState.no + 1,
      }));
      alert('글 등록이 완료되었습니다.');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('글 등록 중 오류');
    });
  };

  return (
    <>
      <S.margin></S.margin>
      <S.head>
        <S.header>
          <h1>분실물 센터</h1>
        </S.header>
        <S.title>
          <Link to={"/lostnfound/register/lotteworld"} ><S.lotteworld>롯데월드</S.lotteworld></Link>
          <Link to={"/lostnfound/register/everland"} ><S.everland >에버랜드</S.everland ></Link>
          <S.seoulland color='#1FB1D9'>서울랜드</S.seoulland>
        </S.title>
      </S.head>

      <S.header>
        <h2 >분실물 등록</h2>
      </S.header>

      <div>
      <S.divbox1>
        <S.subtitle>
          <p >종류 </p> <S.subp>(필수 항목)</S.subp>
          <S.marginleft>장소 </S.marginleft><S.subp>(필수 항목)</S.subp>
        </S.subtitle>
        </S.divbox1>

        <S.inputbox>
          <S.StyledInput type='text' name='item' placeholder="종류" value={lostnseouland.item} onChange={handleChange} />
          <S.StyledInput2  type='text' name='found' placeholder="장소" value={lostnseouland.found} onChange={handleChange} />
        </S.inputbox>
      </div>

      <div>
      <S.divbox2>
        <S.subtitle2>
          <p>내용 </p><S.subp2 >(필수 항목)</S.subp2>
        </S.subtitle2>
        </S.divbox2>


        <S.inputbox>
          <S.StyledInput3  type="text" name="content" placeholder="내용을 입력해주세요." value={lostnseouland.content} onChange={handleChange} />
        </S.inputbox>
      </div>

      <S.buttonbox>
      <S.backbutton >
          <Link to={`/lostnfound/list/seoulland`}>뒤로가기
          </Link>
          </S.backbutton>

        <S.okbutton  onClick={handleSubmit}>
          <Link style={{color:"#fff"}} to={`/lostnfound/list/seoulland`}>등록하기</Link>
        </S.okbutton>
      </S.buttonbox>


    </>
  );
};

export default LostnFoundRegisterSeoulland;
