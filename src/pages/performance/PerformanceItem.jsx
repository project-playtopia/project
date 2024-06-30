import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const PerformanceItem = ({img, title, parkName, time, location}) => {
    return (
        <S.ItemWrapper>
            <S.ImgWrapper imgSrc={img} ></S.ImgWrapper>
            <S.ContentWrapper>
                <S.DescriptionWrapper>
                    <S.Header5> <FontAwesomeIcon icon={faLocationDot} color='#FE78C0' /> {parkName}</S.Header5>
                    <S.TimeMarker><FontAwesomeIcon icon={faClock} /> {time}</S.TimeMarker>
                </S.DescriptionWrapper>
                <S.Header4>{title}</S.Header4>
                <p className='location'>{location}</p>
            </S.ContentWrapper>
            
        </S.ItemWrapper>
    );
};

export default PerformanceItem;