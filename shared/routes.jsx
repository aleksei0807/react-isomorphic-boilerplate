import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import GeneralContainer from '../shared/containers/GeneralContainer';
import Home from '../shared/components/Home';
import PageOne from '../shared/components/PageOne';
import PageTwo from '../shared/components/PageTwo';

export default (
	<Route path="/" component={GeneralContainer}>
		<IndexRoute component={Home} />
		<Route path="page1" component={PageOne} />
		<Route path="page2" component={PageTwo} />
	</Route>
);
