import React, { Component } from 'react';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../../hoc/Auxillary/Auxillary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    showModal: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIg = {
      ...this.state.ingredients,
    };
    updatedIg[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIg });
    this.updatePurchaseState(updatedIg);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIg = {
      ...this.state.ingredients,
    };
    updatedIg[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIg });
    this.updatePurchaseState(updatedIg);
  };

  modalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  orderHandler = () => {
    alert('You have successfully order!');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Auxillary>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            modalClosed={this.closeModalHandler}
            order={this.orderHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          igAdded={this.addIngredientHandler}
          igRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          showModal={this.modalHandler}
          price={this.state.totalPrice}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
