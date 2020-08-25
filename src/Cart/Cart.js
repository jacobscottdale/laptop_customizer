import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import CartTotal from '../CartTotal/CartTotal';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <CartItem 
                key={featureHash}
                feature={feature}
                selectedOption={selectedOption}
                />
            );
          });

          

        return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <CartTotal selected={this.props.selected} />
          </section>
        )
    }
}

export default Cart;