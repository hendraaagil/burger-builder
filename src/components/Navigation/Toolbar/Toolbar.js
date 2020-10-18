import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from './Toolbar.module.css';

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle click={props.drawerToggle} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
