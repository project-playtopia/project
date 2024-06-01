import React from 'react';
import './foundlist.css';

const LostnFoundTable = props => {
  const { headersName, children } = props;

  return (
    <table className="LostnFoundTable">
      <thead>
        <tr>
          {headersName.map((item, i) => {
              return (<td className="LostnFoundTablehead" key={i}>{ item }</td>)
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

export default LostnFoundTable;