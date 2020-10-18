import React from 'react';

import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Auxillary>
      <Backdrop show={props.open} close={props.close} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
