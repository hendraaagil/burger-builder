import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  // ...

  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;