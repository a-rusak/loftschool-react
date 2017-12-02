import React, { PureComponent } from 'react';
import Market from '../Market';
import '../Order/Order.css';

export default class App extends PureComponent {
  state = {};
  render() {
    return (
      <div className="app">
        <Market />
      </div>
    );
  }
}
