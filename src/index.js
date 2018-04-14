import './vendors';
import { App } from './index.jsx';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';


$(document).ready(function () {

    const ele = document.createElement('div');
    document.body.appendChild(ele);
    ReactDOM.render(<App />, ele);

});
