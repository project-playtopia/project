// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const LotteworldAttractionExplain = () => {
//   const { id } = useParams();
//   const [attraction, setAttraction] = useState(null);


//   useEffect(() => {
//     const fetchData = async () => {

//       try{  const response = await fetch(`http://localhost:8000/attraction/lotteworld/explain/${id}`);
//       if (!response.ok) {
//         throw new Error ('Network response was not ok');
//       }
    
//       const data = await response.json();
//       setAttraction(data);
//     } catch (error){
//       console.error("Fetch error:", error);
//     }
//   };

//     fetchData();
//   }, [id]);
  

//   if (!attraction) {
//     return <div>Loading...</div>;
//   }

//   return (
    
//     <div>
//       <h2>{attraction.title}</h2>
//       <img src={`${process.env.PUBLIC_URL}/AttractionsImage/Lotteworld/at${attraction.id}.jpg`} alt="attraction" />
//       <p>{attraction.description}</p>
//       <span>{attraction.location}</span>
          
//      <button></button>
//     </div>
//   );
// };

// export default LotteworldAttractionExplain;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './style.js'; // 스타일 컴포넌트 S를 사용한다고 가정

const LotteworldAttractionExplain = () => {
    const { id } = useParams(); 
    const [attractions, setAttractions] = useState("");

    useEffect(() => {
        const fetchAttractionDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8000/attraction/lotteworld/explain/${id}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                setAttractions(data);
            } catch (error) {
                console.error("Fetching attraction explain failed:", error);
            }
        };

        fetchAttractionDetail();
    }, [id]); // id가 변경될 때마다 새로운 정보를 불러온다

    if (!attractions) {
        return <div>Loading...</div>;
    }

    return (
        <S.Background>
            <S.ImageWrapper>
                <S.Image src={`${process.env.PUBLIC_URL}/AttractionsImage/Lotteworld/at${attractions.id}.jpg`} alt="attraction" />
                <div>
                    <h1>{attractions.title}</h1>
                    <p>{attractions.location}</p>
                    <p>{attractions.description}</p>
                </div>
            </S.ImageWrapper>
        </S.Background>
    );
};

export default LotteworldAttractionExplain;


