import React, { useEffect, useState } from 'react';
import S from './style.js'
import { NavLink } from 'react-router-dom';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';


const CourseLotteworld = () => {

  const courses = ["#우산코스", "#어린이코스", "#스릴코스", "#멀미코스"];
  const [activeIndex, setActiveIndex] = useState(null);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    if (activeIndex !== null) {
      const courseName = courses[activeIndex].replace('#', '');
      const company = "롯데월드";
      fetch(`http://localhost:8000/course/attractions?courseName=${courseName}&company=${company}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('서버 오류');
          }
          return response.json();
        })
        .then(data => {
          setAttractions(data);
        })
        .catch(error => {
          console.error("정보를 가져오는데 실패", error);
        });
    }
  }, [activeIndex]);

  return (
    <S.Background className='notosanskr'>
      <S.H1>추천코스</S.H1>
      <S.NavParkSelector>
        <NavLink to={"/course/lotteworld"}>
           <p>롯데월드</p>
        </NavLink>
        <span>|</span>
       <NavLink to={"/course/everland"}>
          <p>에버랜드</p>
       </NavLink>
      <span>|</span>
      <NavLink to={"/course/seoulland"}>
       <p>서울랜드</p>
      </NavLink>
     </S.NavParkSelector>

     <S.CourseContainer>
   {courses.map((course, index) => (
    <S.CourseButton
      key={course}
      isActive={activeIndex === index}
      onClick={() => setActiveIndex(index)}
    >
      <p>{course}</p>
    </S.CourseButton>
    ))}
  </S.CourseContainer>
  <S.AttractionsContainer>
  {attractions.map(attraction => (
        <S.ImageWrapper key={attraction.id}>
          <S.AttractCourse>
            <S.Image src={attraction.img}/>
          </S.AttractCourse>
          <S.HeightRestriction>
            <p>{attraction.height}</p>
          </S.HeightRestriction>
          <S.IconWrapper>
            <S.Icon icon={faMapPin}/>
            <p>{attraction.attractionName}</p>
          </S.IconWrapper>
        </S.ImageWrapper>
      ))}
      </S.AttractionsContainer>
    </S.Background>
  );
};

export default CourseLotteworld;