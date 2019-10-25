import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderTo = document.getElementById('root');

const renderMethod = process.env.SSR_ENABLED ? 'hydrate' : 'render';

const Application = () => (<App/>)

const doRender = () => ReactDOM[renderMethod](<Application />, renderTo);

(process.env.NODE_ENV !== 'production' && window.requestAnimationFrame(doRender)) || doRender();

process.env.NODE_ENV !== 'production' && module && module.hot && module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
