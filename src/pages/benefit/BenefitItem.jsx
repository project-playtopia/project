import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const BenefitItem = ({itemId, title, startAt, endAt, price, img}) => {
	const period = startAt.slice(0,10) +" ~ "+ endAt.slice(0,10);
	return (
		<Link to={`/benefit/explain?itemId=${itemId}`} style={{display:"block"}}>
			<S.GridItem>
				<div>
					{
						img ? (<img src={img} alt="" />) : (<></>)
					}
				</div>
				<p>{period}</p>
				<S.ItemTitle>{title}</S.ItemTitle>
				<p>{price}원</p>
			</S.GridItem>
		</Link>
	);
};

export default BenefitItem;