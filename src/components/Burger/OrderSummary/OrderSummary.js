import React from 'react';

import Auxillary from '../../../hoc/Auxillary';

const OrderSummary = (props) => {
  const igSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{igSummary}</ul>
      <p>Continue to Checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </Auxillary>
  );
};

export default OrderSummary;