import React, { Component } from 'react';
export default class child01302 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
	
	const MyButton = React.forwardRef((props, ref) => (
	  <p ref={ref}>
		{props.children}
		i am child01302
	  </p>
	));
	console.log(MyButton);
    return (
      <div className="box-links">
		<MyButton />
      </div>
    );
  }
}