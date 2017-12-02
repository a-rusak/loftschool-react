import React, { PureComponent } from 'react';
import './Order.css';

class Order extends PureComponent {
  render() {
    const {name, price, createdAt } = this.props.order;
    return (
      <li className="order order-item">
        <dl>
          <dt>Название:</dt>
          <dd>{name}</dd>
        </dl>
        <dl>
          <dt>Цена:</dt>
          <dd>{price}</dd>
        </dl>
        <dl>
          <dt>Создан:</dt>
          <dd>{createdAt}</dd>
        </dl>
      </li>
    );
}
}

export default Order;
