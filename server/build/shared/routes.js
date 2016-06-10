'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _GeneralContainer = require('../shared/containers/GeneralContainer');

var _GeneralContainer2 = _interopRequireDefault(_GeneralContainer);

var _Home = require('../shared/components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _PageOne = require('../shared/components/PageOne');

var _PageOne2 = _interopRequireDefault(_PageOne);

var _PageTwo = require('../shared/components/PageTwo');

var _PageTwo2 = _interopRequireDefault(_PageTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ path: '/', component: _GeneralContainer2.default },
	_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'page1', component: _PageOne2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'page2', component: _PageTwo2.default })
);