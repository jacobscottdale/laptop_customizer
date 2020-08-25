import React, { Component } from 'react';
import ComputerPartsList from '../ComputerPartsList/ComputerPartsList';
import { FEATURES } from '../Features';
import './ComputerStore.css';

class ComputerStore extends Component {
    render() {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <ComputerPartsList 
                    key={featureHash}
                    feature={feature}
                    options={FEATURES[idx]}
                    selected={this.props.selected}
                    handleFeatureUpdate={this.props.handleFeatureUpdate}
                />
            )
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default ComputerStore;