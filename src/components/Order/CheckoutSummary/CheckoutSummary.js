import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope is tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" click={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" click={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
