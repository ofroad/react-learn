import React from 'react';
import Childlinks from "./childlink";
import {NumberList} from "./child01101";
import {Blog} from "./child01102";
import './App.css';

console.log(React);

class p11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
  }


  render() {
	const kk = [1, 2, 3, 4, 5];
	const postdata = [
	  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
	];
    return (
      <div>
		<h1>列表渲染1---</h1>
        <NumberList numbers={kk} />
		<h1>列表渲染2---</h1>
		<Blog posts={postdata} />
		<Childlinks />
      </div>
    );
  }
}
export default p11;
