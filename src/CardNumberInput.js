import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ``
  };

  format(numbers) {
    numbers += ``;
    const isWellNumbers =
      numbers !== `undefined` && numbers !== `null` && numbers !== ``;
    return isWellNumbers ? numbers.replace(/\d{4}/g, `$& `) : ``;
  }

  normalize(string) {
    return string
      .trim()
      .split(` `)
      .join(``);
  }

  changeHandler = evt => {
    const value = evt.target.value;
    this.props.onChange(this.normalize(value));
  };

  componentWillReceiveProps({ cardNumber }) {
    if (this.props.cardNumber !== cardNumber) {
      this.setState({
        number: this.format(cardNumber)
      });
    }
  }

  componentDidMount() {
    const number = this.format(this.props.cardNumber);
    this.setState({ number });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.number}
        onChange={this.changeHandler}
      />
    );
  }
}

export default CardNumberInput;
