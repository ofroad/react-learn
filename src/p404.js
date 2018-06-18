import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './App.css';

class p404 extends Component {
  render() {
    return (
      <div className="App">
      <p>404 page</p>
	  <Link to="/">to p1</Link><br />
	  <Link to="/p2">to p2</Link><br />
	  <Link to="/p3">to p3</Link>
      </div>
    );
  }
}

export default p404;
