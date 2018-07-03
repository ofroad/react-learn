import React from 'react';
import Childlinks from "./childlink";
import Child01301 from "./child01301";
import './App.css';

console.log(React);

class p13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
	this.textInput = React.createRef();
	this.child = React.createRef();
  }

  componentWillMount(){
	  console.log("=========p13 componentWillMount=============");
	  console.log(this.refs)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p13 UNSAFE_componentWillMount=============");
	  //console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p13 componentWillUpdate=============");
	  //console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p13 componentDidUpdate=============");
	  //console.log(this)
  }
  render() {
	const kk = [1, 2, 3, 4, 5];
	const postdata = [
	  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
	];
    return (
      <div>
		<h1>ref---createRef</h1>
        <div>name: <input type="text" ref={this.textInput} /></div>
		<Child01301 ref={this.child} />
		<Childlinks />
      </div>
    );
  }
  componentDidMount(){
	  var that=this;
	  console.log("=========p13 componentDidMount=============");
	  console.log(this);
	  //通过current访问dom
	  this.textInput.current.focus();
	  
	  //拿到子组件Child013里面的p节点
	  console.log(this.child.current.p.current.innerHTML);
  }
  componentWillUnmount(){
	  var that=this;
	  console.log("=========p13 componentWillUnmount=============");
	  //console.log(this);
  }
}
export default p13;
