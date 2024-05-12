import React from 'react';
import './qna.css'

const QnaTable = props => {
  const { headersName, children } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {headersName.map((item, i) => {
              return (<td className="head" key={i}>{ item }</td>)
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