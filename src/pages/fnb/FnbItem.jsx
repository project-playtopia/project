import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const FnbItem = ({itemId, title, img, description, location}) => {
	return (
		<Link to={`/fnb/explain?itemId=${itemId}`} style={{display:"block"}}>
			<S.GridItem>
				<S.ItemImgWrapper imgSrc = {img}>
				</S.ItemImgWrapper>
				<S.ItemTitle>{title}</S.ItemTitle>
				<p>{description}</p>
				{location && (<p><FontAwesomeIcon icon={faLocationDot} size="1x" color="#FE78C0"/> {location}</p>)}
			</S.GridItem>
		</Link>
	);
};

export default FnbItem;