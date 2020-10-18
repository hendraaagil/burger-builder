import React from 'react';

import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default Logo;
