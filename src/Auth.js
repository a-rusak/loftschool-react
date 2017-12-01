import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authorizeUser } from './AuthorizeApi';

class Auth extends Component {
  state = {
    email: ``,
    password: ``,
    isAuthorized: false,
    isError: false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {email, password} = this.state;

    const isAuthorized = authorizeUser(email, password);
    const isError = !isAuthorized;
    this.setState({ isAuthorized, isError });
  };

  render() {
    const { email, password, isAuthorized, isError } = this.state;

    return (
      <div>
        <legend>Логин</legend>
        <input type="text" name="email" value={email} onChange={this.handleChange} />
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Войти</button>
        {isError && <p className="error">Неправильный логин или пароль</p>}
        {isAuthorized && <Redirect to="/" />}      </div>
    );
  }
}

export default Auth;
