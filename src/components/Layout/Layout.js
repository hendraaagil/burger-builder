import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import styles from './Layout.module.css';

const Layout = (props) => (
  <Auxillary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout;
