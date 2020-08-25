import React, { Component } from 'react';
import ComputerPartsItem from '../ComputerPartsItem/ComputerPartsItem';
import slugify from 'slugify';
import './ComputerPartsList.css';

class ComputerPartsList extends Component {
    render() {
        const itemOptions = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <ComputerPartsItem 
                    key={itemHash}
                    id={itemHash}
                    currentFeature={this.props.feature}
                    selected={this.props.selected}
                    item={item}
                    handleFeatureUpdate={this.props.handleFeatureUpdate}
                />
            );
      });

        return (
            <fieldset className="feature" >
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {itemOptions}
            </fieldset>
        )
    }
}

export default ComputerPartsList; 