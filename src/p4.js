import React, { Component } from 'react';
//import {Link } from "react-router-dom";
import Childlinks from "./childlink";
import Childa from "./child041";
import Childb from "./child042";
import Emmiter from './bus'
import './App.css';

console.log("5234")


class p4 extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
	  nickname2: ""
    };
  }
  childConton = a => {
    this.setState({
      nickname: a
    });
  }
  childConton2 = a => {
    this.setState({
      nickname2: a
    });
  }
  componentWillMount(){
	  console.log("=========p1 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p1 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p1 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p1 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========p1 render=============");
	//console.log(this)
    return (
      <div className="App">
		  <p>p4 page====兄弟组件传递数据</p>
		  <div>使用共同的父组件传递</div>
		  <Childa childCont={this.childConton} nickname={this.state.nickname2}></Childa>
		  <br /><br />
		  <Childb childCont2={this.childConton2} nickname={this.state.nickname}></Childb>
		  <Childlinks />
      </div>
    );
  }
  showmsg(message,emi){
	  console.log("========================我是来自触发传递的数据=========================",message);
	  console.log(Emmiter===emi)
  }
  componentDidMount(){
	  var that=this;
	  console.log("=========p1 componentDidMount=============");
	  console.log(this);
	  // 组件装载完成以后声明一个自定义事件
	  Emmiter.on('changeMessage',that.showmsg);
  }
  componentWillUnmount(){
	  var that=this;
	  console.log("=========p1 componentWillUnmount=============");
	  console.log(this);
	  Emmiter.removeListener('changeMessage',that.showmsg);
  }
}

export default p4;
