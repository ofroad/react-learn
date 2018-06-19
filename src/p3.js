import React, { Component } from 'react';
import {Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ChildOne from "./child03";
import './App.css';

class p3 extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  getChildContext() {
    return {name: this.state.name};
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  componentWillMount(){
	  console.log("=========p3 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p3 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p3 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p3 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========p3 render=============");
    return (
      <div className="App">
      <p>p3 page====父组件向孙子组件通信</p>
	  <div>也可以叫跨级组件通信，使用context来实现；</div>
	  <div>用户名：<input type="text" onChange={this.onChangeName}/></div>
      <ChildOne childCont={this.changeChildCont} />
	  <Link to="/">to p1</Link><br />
	  <Link to="/p2">to p2</Link><br />
	  <Link to="/p3">to p3</Link>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========p3 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p3 componentWillUnmount=============");
	  console.log(this)
  }
}
p3.childContextTypes = {
  name: PropTypes.string
};
export default p3;
