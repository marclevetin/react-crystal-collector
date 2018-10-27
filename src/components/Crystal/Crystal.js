import React, { Component } from 'react';

class Crystal extends Component {
  render() {
    return (
      <div>
        <p onClick={() => this.props.handleClick(this.props.value)}>This is the Crystal</p>
      </div>
    );
  }
}

export default Crystal;
