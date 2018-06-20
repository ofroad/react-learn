import React, { Component } from 'react';
export default class Child extends Component {
  handleChange = e => {
    //this.props.childCont(e.target.value);
  };
  render() {
    return (
      <div>
        <div>孙子组件</div>
        收到的来自祖先的数据：<p></p>
      </div>
    );
  }
}