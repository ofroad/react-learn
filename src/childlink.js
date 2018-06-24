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
		<Link to="/p7">to p7</Link><br />
		<Link to="/p8">to p8</Link><br />
		<Link to="/p9">to p9</Link><br />
		<Link to="/p10">to p10</Link><br />
		<Link to="/p11">to p11</Link><br />
      </div>
    );
  }
}