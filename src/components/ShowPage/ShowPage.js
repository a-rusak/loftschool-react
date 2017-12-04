import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class ShowPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
