import React from 'react';
import './qna.css'

const Qnacolumn = ({ children }) => {
    return (
      <td className="column" >
        {children}
      </td>
    )
  }

export default Qnacolumn;