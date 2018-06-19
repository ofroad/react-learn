import React, { Component } from 'react';
import {Link } from "react-router-dom";
import Child from "./child01";
import './App.css';

class p1 extends Component {
  constructor() {
    super();
    this.state = {
      nickname: ""
    };
  }
  handleChange = e => {
    this.setState({
      nickname: e.target.value
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
      <p>p1 page====父组件向子组件传递数据</p>
	  <div>react数据流动是单向的，父组件向子组件通信最为常见。父组件通过props向子组件传递需要的信息。</div>
	  <input type="text" onChange={this.handleChange} />
      <Child nickname={this.state.nickname} />
	  <Link to="/">to p1</Link><br />
	  <Link to="/p2">to p2</Link><br />
	  <Link to="/p3">to p3</Link>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========p1 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p1 componentWillUnmount=============");
	  console.log(this)
  }
}

export default p1;
