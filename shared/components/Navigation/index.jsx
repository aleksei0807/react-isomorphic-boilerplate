import React, { Component } from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
    require('./index.styl');
}

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
				<Link to="/" activeClassName="active">Home</Link>
				<Link to="/page1" activeClassName="active">Page 1</Link>
				<Link to="/page2" activeClassName="active">Page 2</Link>
			</div>
        );
    }
}
