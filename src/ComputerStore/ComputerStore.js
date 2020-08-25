import React, { Component } from 'react';
import ComputerPartsList from '../ComputerPartsList/ComputerPartsList';
import './ComputerStore.css';

class ComputerStore extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <ComputerPartsList 
                    key={featureHash}
                    features={this.props.features}
                    feature={feature}
                    options={this.props.features[idx]}
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