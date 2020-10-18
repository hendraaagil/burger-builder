import React from 'react';
import { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component, doesn't to be a class
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }

  render() {
    const igSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Auxillary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{igSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" click={this.props.modalClosed}>
          Cancel
        </Button>
        <Button btnType="Success" click={this.props.order}>
          Continue
        </Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;
