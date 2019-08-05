import React, { Component } from 'react';
import {Link } from "react-router-dom";

export default class Links extends Component {
  render() {
    return (
      <div className="box-links">
        <Link to="/">to p1</Link>
	    <Link to="/p2">to p2</Link>
	    <Link to="/p3">to p3</Link>
	    <Link to="/p4">to p4</Link>
	    <Link to="/p5">to p5</Link>
		<Link to="/p6">to p6</Link>
		<Link to="/p7">to p7</Link>
		<Link to="/p8">to p8</Link>
		<Link to="/p9">to p9</Link>
		<Link to="/p10">to p10</Link>
		<Link to="/p11">to p11</Link>
		<Link to="/p12">to p12</Link>
		<Link to="/p13">to p13</Link>
      </div>
    );
  }
}