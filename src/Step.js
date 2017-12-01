import React, { PureComponent } from 'react';
import './Step.css';


class Step extends PureComponent {
  getCssClasses() {
    const classes = [`step`];
    if (this.props.isSelected) {
      classes.push(`step-selected`);
    }
    if (this.props.isClickable) {
      classes.push(`step-clickable`);
    }
    return classes.join(` `);
  }

  handleClick = evt => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.getCssClasses()}
      >
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
