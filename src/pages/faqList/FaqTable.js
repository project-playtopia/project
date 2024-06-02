import React from 'react';
import './faq.css';

const FaqTable = props => {
  const { headersName, children } = props;

  return (
    <table className="FaqTable">
      <thead>
        <tr>
          {headersName.map((item, i) => {
              return (<td className="FaqTablehead" key={i}>{ item }</td>)
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