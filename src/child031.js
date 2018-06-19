import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildTwo extends Component { 
  render() {
    return (
      <div>
        <div>我是孙子组件，我需要拿到最外层组件的值</div>
        <div>用户：{this.context.name}</div>
      </div>
    );
  }
}

ChildTwo.contextTypes = {
  name: PropTypes.string
};

export default ChildTwo; 