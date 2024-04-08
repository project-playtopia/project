import styled, { css } from "styled-components";
import theme from "../../global/theme";

const variantCSS = {
  main: css`
    background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  `,
   sub: css`
   background-color: ${({theme})=>theme.PALETTE.sub["sub_soft"]};
 `
};

const shapeCSS = {
  default: css`border-radius : 50px;`
  };

const sizeCSS = {
  small: css`
    width: 160px;
    height: 55px;
    padding: 16px;
  `,

  medium: css`
    width: 250px;
    height: 55px;
    padding: 16px;
  `,

  big: css`
    width: 450px;
    height: 60px;
    padding: 16px;
  `,
};

const colorCSS = {
  white: css`
    color: #fff;
  `,

  black: css`
    color: #000000;
  `,
};

const Button = styled.button`
  cursor: pointer;
  border : none;
  
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  ${({ color }) => colorCSS[color]}
`;

export default Button;
