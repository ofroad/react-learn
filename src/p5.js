import React, { Component } from 'react';
//import {Link } from "react-router-dom";
import Childlinks from "./childlink";
import Childa from "./child051";
import Childb from "./child052";
import './App.css';

class p5 extends Component {
  componentWillMount(){
	  console.log("=========p5 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p5 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p5 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p5 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========p5 render=============");
    return (
      <div className="App">
      <p>p5 page====兄弟组件通信</p>
	  <div>使用全局自定义事件</div>
	  <Childa></Childa>
	  <br /><br />
	  <Childb></Childb>
	  <Childlinks />
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========p5 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p5 componentWillUnmount=============");
	  console.log(this)
  }
}
/*
p5.childContextTypes = {
  name: PropTypes.string
};
*/
export default p5;
