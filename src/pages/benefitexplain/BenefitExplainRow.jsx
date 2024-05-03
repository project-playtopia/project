import React from 'react';

const BenefitExplainRow = ({title, originalPrice, discountedPrice, companion}) => {
	const texedOriginalPrice = originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const texedDiscountedPrice = discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const texedCompanion = (companion) ? companion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): "-";
	return (
		<tr style={{height: "3rem", lineHeight: "3rem"}}>
			<td>{title}</td>
			<td>{texedOriginalPrice}</td>
			<td><span className="subcolor">{texedDiscountedPrice}</span></td>
			<td><span className="subcolor">{texedCompanion}</span></td>
		</tr>
	);
};

export default BenefitExplainRow;