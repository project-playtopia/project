import React from 'react';
import { SearchContainer, SearchInput, IconWrapper } from './style'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BasicSearch = ({ size, shape, variant, children, ...rest }) => {
  return (
    <SearchContainer size={size} shape={shape} variant={variant}>
      <SearchInput {...rest}>{children}</SearchInput>
      <IconWrapper>
        <FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" />
      </IconWrapper>
    </SearchContainer>
  );
};

export default BasicSearch;
