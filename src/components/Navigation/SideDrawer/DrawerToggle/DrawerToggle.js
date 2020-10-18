import React from 'react';

import styles from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
  <div onClick={props.click} className={styles.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
