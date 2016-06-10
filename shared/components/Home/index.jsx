import React, { Component } from 'react';

if (process.env.BROWSER) {
    require('./index.styl');
}

export default class Home extends Component {
    render() {
        return (
            <div className="home">
				<h2>Home</h2>
			</div>
        );
    }
}
