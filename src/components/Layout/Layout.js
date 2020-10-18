import React from 'react';
import { Component } from 'react';

import Auxillary from '../../hoc/Auxillary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.closeSideDrawer}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
