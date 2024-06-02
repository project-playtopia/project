import React from 'react';
import './faq.css';

const FaqRow = ({ children }) => {
    return (
      <tr className="FaqRow">
        {children}
      </tr>
    )
  }

export default FaqRow;