import React, { PureComponent } from 'react';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { getOrders } from '../../reducers/market';
import Order from '../Order';
import './Market.css';

import { connect } from 'react-redux';
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toDateString()
  };
};

export class Market extends PureComponent {
  onCreate = () => {
    const { createOrder } = this.props;
    const order = getNewOrder();
    createOrder(order);
    // this.setState(order);
  };

  onSend = () => {
    const { moveOrderToFarm } = this.props;
    const order = this.props.orders.slice(-1)[0];
    moveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button onClick={this.onCreate} className="new-orders__create-button">
          Создать заказ
        </button>
        <button onClick={this.onSend}>Отправить заказ на ферму</button>
        <ul className="order-list">
          {orders.map(order => <Order key={order.id} order={order} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getOrders(state)
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
