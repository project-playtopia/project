import styled, { css } from "styled-components";

const variantCSS = {
  main: css`
    background-color: #fff;
  `
};

const shapeCSS = {
  default: css`border-radius: 45.5px;`
};

const sizeCSS = {
  default: css`
    width: 600px;
    height: 60px;
    padding: 16px;
  `,
};

const SearchContainer = styled.div`
  display: flex; 
  align-items: center; 
  border: solid 2px #1fb1d9; 
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
`;

const SearchInput = styled.input`
  flex: 1; 
  border: none; 
  &:focus {
    outline: none; 
  }
`;


const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { SearchContainer, SearchInput, IconWrapper };
