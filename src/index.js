

//import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ComponenteDePagina404 from './ComponenteDePagina404.js';
import CalculadoraPensao from './compontentes/calc-pensao/CalculadoraPensao.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/calculadora-pensao-alimenticia" component={CalculadoraPensao} />
            <Route path='*' component={ComponenteDePagina404} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
