import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (process.env.NODE_ENV === 'production') {
	let script = document.createElement('script');
	script.async = true;
	script.src = "https://www.googletagmanager.com/gtag/js?id=UA-107416457-1";
	document.head.appendChild(script);	
	window.dataLayer = window.dataLayer || [];
	function gtag() { window.dataLayer.push(arguments); }
	gtag('js', new Date());	
	gtag('config', 'UA-107416457-1');
	gtag('event', 'Page Load');	
}