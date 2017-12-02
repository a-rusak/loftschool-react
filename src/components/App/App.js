import React, { PureComponent } from 'react';
import Market from '../Market';
import Budget from '../Budget';
import '../Order/Order.css';
import './App.css';

export default class App extends PureComponent {
  state = {};
  render() {
    return (
      <div className="app">
        <Market />
        <Budget />
      </div>
    );
  }
}
