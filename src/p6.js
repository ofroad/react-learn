import React, { Component } from 'react';
//import {Link } from "react-router-dom";
import Childlinks from "./childlink";
import Childa from "./child061";
import './App.css';

console.log(React)

class p6 extends Component {
  componentWillMount(){
	  console.log("=========p6 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p6 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p6 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p6 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========p6 render=============");
    return (
      <div className="App">
      <p>p6 page====父组件向孙子组件通信</p>
	  <div>使用新context api(未完成)</div>
	  <Childa></Childa>
	  <br /><br />
	  <Childlinks />
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========p6 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p6 componentWillUnmount=============");
	  console.log(this)
  }
}
/*
p5.childContextTypes = {
  name: PropTypes.string
};
*/
export default p6;
