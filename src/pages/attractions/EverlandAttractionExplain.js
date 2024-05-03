import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>{attraction.title}</h2>
      <img src={`${process.env.PUBLIC_URL}/AttractionsImage/Lotteworld/at${attraction.id}.jpg`} alt="attraction" />
      <p>{attraction.description}</p>
      <span>{attraction.location}</span>
    </div>
  );
};

export default EverlandAttractionExplain;
