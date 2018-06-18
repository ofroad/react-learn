import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './App.css';

class p1 extends Component {
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
      <p>p1 page</p>
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
