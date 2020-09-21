import React from 'react';
import './index.css';
import App from './App';
import MyRender from './my-render';
// import ReactDom from 'react-dom';

MyRender.render(<App />, document.getElementById('root'));
// ReactDom.render(<App />, document.getElementById('root'));
