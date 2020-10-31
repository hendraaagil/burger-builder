import React from 'react';

import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default NavItems;
