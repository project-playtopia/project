import React from 'react';
import S from './style.js'
import { Link } from 'react-router-dom';

const YearCostBenefitItem = ({itemId, title, startAt, endAt, img}) => {
	const period = startAt.slice(0,10) +" ~ "+ endAt.slice(0,10);
	return (
		<Link to={`/yearcost/benefit/explain?itemId=${itemId}`} style={{display: "block"}}>
			<S.GridItem>
				<S.ItemImgWrapper imgSrc = {img}>
				</S.ItemImgWrapper>
				<p>{period}</p>
				<S.ItemTitle>{title}</S.ItemTitle>
			</S.GridItem>
		</Link>
	);
};

export default YearCostBenefitItem;