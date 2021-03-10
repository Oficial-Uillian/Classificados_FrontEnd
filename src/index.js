import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Login from '../src/paginas/login'
import ResetarSenha from '../src/paginas/login/resetarsenha' 

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const rotas = (
  <Router>
    <Switch>
    <Route path='/' exact component={Login}/>
    <Route path='resetarsenha' component={ResetarSenha} />
    </Switch>
  </Router>
)

ReactDOM.render(
 rotas,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
