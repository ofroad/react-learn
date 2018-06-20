import React, { Component } from 'react';
export default class Child extends Component {
  componentWillMount(){
	  console.log("=========child01 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========child01 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========child01 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========child01 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========child01 render=============");
    return (
      <div>
        <div>子组件</div>
        <div>昵称：{this.props.nickname}</div>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========child01 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========child01 componentWillUnmount=============");
	  console.log(this)
  }
}