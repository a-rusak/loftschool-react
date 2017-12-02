import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getBudget } from '../../reducers/budget';
import './Budget.css';

class Budget extends PureComponent {
  render() {
    const {profit, marketExpense, farmExpense, deliveryExpense} = this.props.budget;
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <dl>
          <dt>Всего получено денег:</dt>
          <dd>{profit}</dd>
        </dl>
        <dl>
          <dt>Расходы продавцов:</dt>
          <dd>{marketExpense}</dd>
        </dl>
        <dl>
          <dt>Расходы на ферме:</dt>
          <dd>{farmExpense}</dd>
        </dl>
        <dl>
          <dt>Расходы на доставку:</dt>
          <dd>{deliveryExpense}</dd>
        </dl>
        <dl>
          <dt>Итого:</dt>
          <dd>{profit - (marketExpense + farmExpense + deliveryExpense)}</dd>
        </dl>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: getBudget(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
