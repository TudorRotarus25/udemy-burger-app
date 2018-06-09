import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {

  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((ingredientKey) => {
      return <li key={ingredientKey}><span style={{textTransform: 'capitalize'}}>{ingredientKey}:</span> {this.props.ingredients[ingredientKey]}</li>
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        <p>Continue to Checkout?</p>
        <Button
          btnType="Danger"
          clicked={this.props.purchaseCanceled}
        >
          CANCEL
        </Button>
        <Button
          btnType="Success"
          clicked={this.props.purchaseContinue}
        >
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
