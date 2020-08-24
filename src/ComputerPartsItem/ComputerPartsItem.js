import React, { Component } from 'react';
import { USCurrencyFormat } from '../CurrencyFormat';
import slugify from 'slugify';

class ComputerPartsItem extends Component {
    render() {
        return (
            <div className="feature__item">
            <input
              type="radio"
              id={this.props.id}
              className="feature__option"
              name={slugify(this.props.currentFeature)}
              checked={this.props.item.name === this.props.selected[this.props.currentFeature].name}
              onChange={e => this.props.handleFeatureUpdate(this.props.currentFeature, this.props.item)}
            />
            <label htmlFor={this.props.id} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        )
    }
}

export default ComputerPartsItem;