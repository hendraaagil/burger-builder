import React from 'react';

import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  // This could be a functional component, doesn't to be a class

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" click={props.modalClosed}>
        Cancel
      </Button>
      <Button btnType="Success" click={props.order}>
        Continue
      </Button>
    </Auxillary>
  );
};

export default OrderSummary;
