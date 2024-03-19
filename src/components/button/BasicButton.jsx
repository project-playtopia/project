import React from 'react';
import Button from './style';

const BasicButton = ({size,shape,variant,children,...rest}) => {
  return (
    // size, shape , variant
    <Button size = {size} shape = {shape} variant = {variant} {...rest}>
      {children}
    </Button>
  );
};

export default BasicButton;