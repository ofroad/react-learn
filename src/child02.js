import React, { Component } from 'react';
export default class Child extends Component {
  handleChange = e => {
    this.props.childCont(e.target.value);
  };
  render() {
    return (
      <div>
        <div>子组件</div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}