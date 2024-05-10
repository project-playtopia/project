import React from 'react';
import './foundlist.css';

const LostnFoundTableRow = ({ children }) => {
    return (
      <tr className="row">
        {children}
      </tr>
    );
};

export default LostnFoundTableRow;
