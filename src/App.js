import React, { Component } from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = [
  'Personal information',
  'Card information',
  'Finish'
];

class App extends Component {
  state = {
    step: 1,
    firstName: ``,
    lastName: ``,
    email: ``,
    cardNumber: ``,
    isTimeOver: false
  };

  isFormCommitable() {
    const {
      firstName: first,
      lastName: last,
      cardNumber,
      email,
      step
    } = this.state;

    return (
      (step === 1 &&
        first !== '' &&
        last !== '' &&
        email !== '' &&
        email.includes(`@`)) ||
      (step === 2 && cardNumber.length === 16) ||
      false
    );
  }

  handleTabClick = (step) => {
    this.setState({ step });
  };


  handleClickNextForm = () => {
    const step = this.state.step + 1;
    this.setState({ step });
  };

  handleChangeForm = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  handleChangeTimeOver = isTimeOver => {
    this.setState({ isTimeOver });
  }

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((stepTitle, index) => (
            <Step
              key={stepTitle}
              onClick={this.handleTabClick}
              isSelected={index + 1 === this.state.step}
              number={index + 1}
              isClickable={index + 1 < this.state.step}
            >
              {stepTitle}
            </Step>
          ))}
        </div>
        <div className="form-content">
          {this.renderForm()}
          <div className="button-panel">
            <button
              className="button-next"
              disabled={
                !this.isFormCommitable() ||
                this.state.isTimeOver
              }
              onClick={this.handleClickNextForm}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderForm() {
    let stepContent = null;
    switch (this.state.step) {
      case 1:
        stepContent = (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
        break;
      case 2:
        stepContent = (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
        break;
      case 3:
        stepContent = `Поздравляем!`;
        break;
      default:
        console.warn(`Неизвестный шаг: ${this.state.step}`);
    }

    return stepContent;
  }
}

export default App;
