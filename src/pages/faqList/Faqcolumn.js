import React from 'react';
import './faq.css'

const Faqcolumn = ({ children }) => {
    return (
      <td className="column" >
        {children}
      </td>
    )
  }

export default Faqcolumn;