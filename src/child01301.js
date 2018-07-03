import React, { Component } from 'react';
export default class child013 extends Component {
  constructor(props) {
    super(props);
	this.p = React.createRef();
  }
  render() {
    return (
      <div className="box-links">
		<p ref={this.p}>i am child01301</p>
      </div>
    );
  }
}