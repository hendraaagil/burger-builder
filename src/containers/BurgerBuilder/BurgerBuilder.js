import React, { Component } from 'react';
import axios from '../../axios-order';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    showModal: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://burger-builder-b13be.firebaseio.com/ingredients.json')
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

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
    // alert('You have successfully order!');
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Hendra Agil',
        address: {
          street: 'Matesih 4',
          zipCode: '57781',
          country: 'Indonesia',
        },
        email: 'hendra@dev.id',
      },
      deliveryMethod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false, showModal: false });
      })
      .catch((err) => {
        this.setState({ loading: false, showModal: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <h3 style={{ textAlign: 'center' }}>Ingredients can't be loaded!</h3>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Auxillary>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          modalClosed={this.closeModalHandler}
          order={this.orderHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxillary>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Auxillary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
