import React, { Component } from 'react';
import './App.css';
import { addListener, removeListener, isAuthorized } from './AuthorizeApi';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Public from './Public';
import Auth from './Auth';
import Private from './Private';

class App extends Component {
  state = {
    isAuthorized: false
  };

  get menu() {
    return [
      {
        to: `/`,
        label: `Главная`
      }, {
        to: `/public`,
        label: `Публичная страница`
      }, {
        to: `/private`,
        label: `Приватная страница`
      }, {
        to: `/auth`,
        label: `Вход`
      }
    ]
  }

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <div>
        <ul className="nav">
          {
            this.menu.map((item, index) => (
              <li key={index}>
                <NavLink
                  exact
                  activeClassName="selected"
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/public" component={Public} />
          <Route path="/auth" component={Auth} onAuth={this.handleAuthorize} />
          {
            isAuthorized ?
              <Route path="/private" component={Private} /> :
              <Redirect from="/private" to="/auth" />
          }
          {!isAuthorized ? <Redirect from="*" to="/" /> : null}
        </Switch>
      </div>
    );
  }
}

export default App;
