import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './App.css';

class p2 extends Component {
  componentWillMount(){
	  console.log("=========p2 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p2 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p2 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p2 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
    console.log("=========p2 render=============");
    return (
      <div className="App">
      <p>p2 page</p>
	  <Link to="/">to p1</Link><br />
	  <Link to="/p2">to p2</Link><br />
	  <Link to="/p3">to p3</Link>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========p2 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p2 componentWillUnmount=============");
	  console.log(this)
  }
}

export default p2;
