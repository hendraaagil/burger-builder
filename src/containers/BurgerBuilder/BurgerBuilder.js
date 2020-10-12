import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Auxillary from '../../hoc/Auxillary';

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxillary>
        <Burger />
        <div>Build Controls</div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
