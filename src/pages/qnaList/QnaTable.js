import React from 'react';
import './qna.css'

const QnaTable = props => {
  const { headersName, children } = props;

  return (
    <table className="QnaTable">
      <thead>
        <tr>
          {headersName.map((item, i) => {
              return (<td className="QnaTablehead" key={i}>{ item }</td>)
            })
            }
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default QnaTable;