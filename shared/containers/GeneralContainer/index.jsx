import React, { Component } from 'react';
import Navigation from '../../components/Navigation';

export default class GeneralContainer extends Component {
    render() {
        return (
            <div className="general-container">
				<h1>React Frontend Boilerplate</h1>
					<Navigation />
				{this.props.children}
			</div>
        );
    }
}
