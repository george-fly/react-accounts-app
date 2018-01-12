import React from 'react';

const AmountBox = ({ type, text, amount }) => {
  return (
    <div className="card">
      <div className={`card-header bg-${type} text-white`}>
        {text}
      </div>
      <div className="card-body">
        {amount}
      </div>
    </div>
  );
}

export default AmountBox
