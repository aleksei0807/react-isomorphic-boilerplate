import React, { Component } from 'react';

if (process.env.BROWSER) {
    require('./index.styl');
}

export default class PageTwo extends Component {
    render() {
        return (
            <div className="page-two">
				<h2>PageTwo</h2>
			</div>
        );
    }
}
