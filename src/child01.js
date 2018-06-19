import React, { Component } from 'react';
export default class Child extends Component {
  render() {
    return (
      <div>
        <div>子组件</div>
        <div>昵称：{this.props.nickname}</div>
      </div>
    );
  }
}