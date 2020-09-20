import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildTwo extends Component {
  // 子组件声明自己要使用context,"contextTypes"写法固定
  static contextTypes = {
      name: PropTypes.string
  }
  static propTypes = {
        
  }
  render() {
    return (
      <div>
        <div>我是孙子组件，我需要拿到最外层组件的值</div>
        <div>用户：{this.context.name}</div>
      </div>
    );
  }
}

//子组件声明自己要使用context----也可以这样声明
/*
ChildTwo.contextTypes = {
  name: PropTypes.string
};
*/
export default ChildTwo; 