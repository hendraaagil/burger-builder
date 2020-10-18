import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './Toolbar.module.css';

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>Menu</div>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
