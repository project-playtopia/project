import React from 'react';
import './faq.css'

const FaqTable = props => {
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

export default FaqTable;