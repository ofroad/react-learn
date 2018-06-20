import React, { Component } from 'react';
import {Link } from "react-router-dom";
export default class Links extends Component {
  render() {
    return (
      <div>
        <Link to="/">to p1</Link><br />
	    <Link to="/p2">to p2</Link><br />
	    <Link to="/p3">to p3</Link><br />
	    <Link to="/p4">to p4</Link><br />
	    <Link to="/p5">to p5</Link><br />
		<Link to="/p6">to p6</Link><br />
      </div>
    );
  }
}