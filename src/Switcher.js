import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = evt => {
    evt.preventDefault();
    const selectedChild = evt.target.getAttribute(`data-id`);
    this.setState({ selectedChild });
  };

  getListButtonCssClass(index) {
    let cssClass = `component-list__name`;
    if (index + `` === this.state.selectedChild + ``) {
      cssClass += ` is-active`;
    }
    return cssClass;
  }

  render() {
    const arr = React.Children.toArray(this.props.children);
    return (
      <div>
        <nav>
          <ul className="component-list">
            {arr.map((it, index) => (
              <li
                key={it.key}
                data-id={index}
                onClick={this.handleChangeChild}
                className={this.getListButtonCssClass(index)}
              >
                {it.type.displayName}
              </li>
            ))}
          </ul>
        </nav>
        <section className="component-wrapper">
          {arr[this.state.selectedChild]}
        </section>
      </div>
    );
  }
}

export default Switcher;
