import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './Toolbar.module.css';

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
