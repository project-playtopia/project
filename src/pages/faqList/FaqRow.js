import React from 'react';
import './faq.css'

const FaqRow = ({ children }) => {
    return (
      <tr className="row">
        {children}
      </tr>
    )
  }

export default FaqRow;