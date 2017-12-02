import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../reducers/farm';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { moveOrderToFarm } from '../../actions/marketActions';
import Order from '../Order';
import './Farm.css';

class Farm extends PureComponent {
  onSend = () => {
    const { moveOrderToCustomer } = this.props;
    const order = this.props.orders.slice(-1)[0];
    moveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.onSend}>Отправить урожай клиенту</button>
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
  moveOrderToCustomer,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
