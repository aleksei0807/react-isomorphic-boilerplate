import React, { Component } from 'react';

if (process.env.BROWSER) {
    require('./index.styl');
}

export default class PageOne extends Component {
    render() {
        return (
            <div className="page-one">
				<h2>PageOne</h2>
			</div>
        );
    }
}
