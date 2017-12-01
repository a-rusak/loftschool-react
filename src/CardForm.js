import React, { Component } from 'react';
import Title from './Title';
import './CardForm.css';

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 120
    };
    props.onChangeTimeOver(false);
  }

  static defaultProps = {
    cardNumber: ``
  };

  componentDidMount() {
    this.id = setInterval(() => {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      this.setState({ leftTime });
      if (leftTime === 0 && this.state.leftTime === 1) {
        this.props.onChangeTimeOver(true);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  handleChangeForm = evt => {
    const { name, value } = evt.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    const { leftTime } = this.state;
    return (
      <form className="card-form">
        <Title>Номер карты</Title>
        <p className="left-time">
          Осталось {leftTime} секунд
        </p>
        <input
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={this.props.cardNumber}
        />
      </form>
    );
  }
}

export default CardForm;
