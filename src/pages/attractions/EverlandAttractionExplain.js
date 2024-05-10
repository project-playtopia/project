import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './style.js'

const EverlandAttractionExplain = () => {
  const { id } = useParams();
  const [attraction, setAttraction] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/attraction/everland/explain/${id}`);
      const data = await response.json();
      setAttraction(data);
    };

    fetchData();
  }, [id]);

  if (!attraction) {
    return <div>Loading...</div>;
  }

  return (
    <S.Background>
      <h2>{attraction.title}</h2>
      <img src={`${process.env.PUBLIC_URL}/AttractionsImage/everland/at${attraction.id}.jpg`} alt="attraction" />
      <p>{attraction.description}</p>
      <span>{attraction.location}</span>
    </S.Background>
  );
};

export default EverlandAttractionExplain;
