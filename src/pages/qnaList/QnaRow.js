import React from 'react';
import './qna.css'

const QnaRow = ({ children }) => {
    return (
      <tr className="QnaRow">
        {children}
      </tr>
    )
  }

export default QnaRow;