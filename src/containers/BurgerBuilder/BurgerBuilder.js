import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Auxillary from '../../hoc/Auxillary';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
