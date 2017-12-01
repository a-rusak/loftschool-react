import React, { Component } from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  static defaultProps = {
    firstName: ``,
    lastName: ``,
    email: ``
  };

  handleChangeForm = evt => {
    const { name, value } = evt.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <form className="personal-form">
        <Title>Персональная информация</Title>
        <input
          type="text"
          name="firstName"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="lastName"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
        />
        <input
          type="email"
          name="email"
          value={this.props.email}
          onChange={this.handleChangeForm}
        />
      </form>
    );
  }
}

export default PersonalForm;
