import React, { useEffect, useState } from 'react';
import BenefitExplainRow from './BenefitExplainRow';

const BenefitExplainTable = ({rows}) => {
	
	return (
		<table style={{
			width: "100%",
			textAlign: "center",
			borderWidth: "0 0 1px 0",
			borderStyle: "solid",
			borderColor: "#1fb1d9",
		}}>
			{
				rows.map((e)=>(
					<BenefitExplainRow
						title={e.title} 
						originalPrice={e.original_price}
						discountedPrice={e.discounted_price}
						companion={e.companion}
					/> 
				))
			}
		</table>
	);
};

export default BenefitExplainTable;