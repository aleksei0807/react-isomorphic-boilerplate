import express from 'express';
import cookieParser from 'cookie-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from '../build/shared/routes';

const app = express();

app.use('/static', express.static('client/dist'));

app.use(cookieParser());

app.use((req, res) => {
	 match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		 let componentHTML = ReactDOM.renderToString(<RouterContext {...renderProps}/>);
		 res.end(renderHTML({componentHTML}));
	 });
});

function renderHTML({componentHTML}) {
    return `<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta name="keywords" content="react, isomorphic, boilerplate">
	  <meta name="description" content="React Isomorphic Boilerplate">
	  <meta name="web_author" content="Aleksei Schurak">
	  <title>React Isomorphic Boilerplate</title>
	  <link rel="stylesheet" href="static/styles.css" charset="utf-8">
	  <!--[if lte IE 9]>
	   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-sham.min.js">
	   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-shim.min.js">
	  <![endif]-->
	</head>
	<body>
	  <div id="root">${componentHTML}</div>
	  <script src="static/js/index.js" charset="utf-8"></script>
	</body>
	</html>
    `;
}

module.exports = app;
