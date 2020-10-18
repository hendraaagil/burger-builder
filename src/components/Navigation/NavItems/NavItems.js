import React from 'react';

import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default NavItems;
