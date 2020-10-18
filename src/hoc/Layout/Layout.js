import React from 'react';
import { Component } from 'react';

import Auxillary from '../Auxillary/Auxillary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar drawerToggle={this.sideDrawerToggle} />
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
