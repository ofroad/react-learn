import React, { Component } from 'react';
import Childa from "./child062";

export default class Child extends Component {
  handleChange = e => {
    //this.props.childCont(e.target.value);
  };
  render() {
    return (
      <div>
        <div>我是子组件</div>
		<br /><br /><br />
        <Childa />
      </div>
    );
  }
}