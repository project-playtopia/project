import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LotteworldAttractionExplain = () => {
  const { id } = useParams();
  const [attraction, setAttraction] = useState(null);


  useEffect(() => {
    const fetchData = async () => {

      try{  const response = await fetch(`http://localhost:8000/attraction/lotteworld/explain/${id}`);
      if (!response.ok) {
        throw new Error ('Network response was not ok');
      }
    
      const data = await response.json();
      setAttraction(data);
    } catch (error){
      console.error("Fetch error:", error);
    }
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
          
     <button></button>
    </div>
  );
};

export default LotteworldAttractionExplain;
