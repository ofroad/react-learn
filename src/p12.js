import React from 'react';
import Childlinks from "./childlink";
import ReactDOM from 'react-dom';
import './App.css';

console.log(React);

class p12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
  }

  componentWillMount(){
	  console.log("=========p12 componentWillMount=============");
	  console.log(this.refs)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p12 UNSAFE_componentWillMount=============");
	  //console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p12 componentWillUpdate=============");
	  //console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p12 componentDidUpdate=============");
	  //console.log(this)
  }
  render() {
	/*
	const kk = [1, 2, 3, 4, 5];
	const postdata = [
	  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
	];
   */
    return (
      <div>
		<h1>ref---字符串</h1>
        <div>name: <input type="text" ref="name" /></div>
		<h1>ref---回调</h1>
        <div>age: <input type="text" ref={(input) => {this.age = input}} /></div>
		<Childlinks ref="links" />
      </div>
    );
  }
  componentDidMount(){
	  //var that=this;
	  console.log("=========p12 componentDidMount=============");
	  console.log(this.refs.links);
	  console.log(this.refs.name.nodeName);
	  console.log(ReactDOM.findDOMNode(this.refs.links));
	  
	  this.age.focus();
  }
  componentWillUnmount(){
	  //var that=this;
	  console.log("=========p12 componentWillUnmount=============");
	  //console.log(this);
  }
}
export default p12;
