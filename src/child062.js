import React, { Component } from 'react';
import {Datacontext} from "./datacontext";

export default class Child extends Component {
  handleChange = e => {
    //this.props.childCont(e.target.value);
  };
  render() {
    return (
	  <Datacontext.Consumer>
	  {val => (
		  <div>
			<div>孙子组件</div>
			收到的来自祖先的数据：<p>{val}</p>
		  </div>
	  )}
	  </Datacontext.Consumer>
    );
  }
}