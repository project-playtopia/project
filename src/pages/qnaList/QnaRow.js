import React from 'react';
import './qna.css'

const QnaRow = ({ children }) => {
    return (
      <tr className="row">
        {children}
      </tr>
    )
  }

export default QnaRow;