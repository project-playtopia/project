import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const BenefitItem = ({itemId, title, startAt, endAt, price, img}) => {
	const period = startAt.slice(0,10) +" ~ "+ endAt.slice(0,10);
	const priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
	return (
		<Link to={`/benefit/explain?itemId=${itemId}`} style={{display:"block"}}>
			<S.GridItem>
				<S.ItemImgWrapper imgSrc = {img}>
				</S.ItemImgWrapper>
				<S.ItemPeriod>{period}</S.ItemPeriod>
				<S.ItemTitle>{title}</S.ItemTitle>
				<p>
					<S.ItemPrice>{priceFormat}</S.ItemPrice>원
				</p>
			</S.GridItem>
		</Link>
	);
};

export default BenefitItem;