import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const Layout = (props) => (
  <Auxillary>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout;
