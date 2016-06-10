'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _routes = require('../build/shared/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const http = require('http');
// const fs = require('fs');
// let port = process.env.PORT || 3333;
//
// http.createServer((req, res) => {
// 	let index = fs.readFileSync("index.html", {encoding: "utf-8"});
// 	console.log(index);
// 	res.setHeader("Content-Type", "text/html;charset=utf-8");
// 	res.end(index);
// }).listen(port);

var app = (0, _express2.default)();

app.use('/static', _express2.default.static('client/dist'));

app.use((0, _cookieParser2.default)());

app.use(function (req, res) {
	// let assets = require('../public/assets/assets.json');
	// delete require.cache[ '/opt/nullCRM/public/assets/assets.json' ];
	(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
		var componentHTML = _server2.default.renderToString(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
		res.end(renderHTML({ componentHTML: componentHTML }));
	});
});

function renderHTML(_ref) {
	var componentHTML = _ref.componentHTML;

	return '<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t  <meta charset="UTF-8">\n\t  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t  <meta name="viewport" content="width=device-width, initial-scale=1">\n\t  <meta name="keywords" content="react, isomorphic, boilerplate">\n\t  <meta name="description" content="React Isomorphic Boilerplate">\n\t  <meta name="web_author" content="Aleksei Schurak">\n\t  <title>React Isomorphic Boilerplate</title>\n\t  <link rel="stylesheet" href="static/styles.css" charset="utf-8">\n\t  <!--[if lte IE 9]>\n\t   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-sham.min.js">\n\t   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-shim.min.js">\n\t  <![endif]-->\n\t</head>\n\t<body>\n\t  <div id="root">' + componentHTML + '</div>\n\t  <script src="static/js/index.js" charset="utf-8"></script>\n\t</body>\n\t</html>\n    ';
}

module.exports = app;