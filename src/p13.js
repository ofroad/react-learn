import React from 'react';
import Childlinks from "./childlink";
import Child01301 from "./child01301";
//import Child01302 from "./child01302";
import './App.css';

console.log(React);

class p13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
	this.textInput = React.createRef();
	this.child = React.createRef();
	this.child02 = React.createRef();
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
	
	//似乎不好在class组件 Child01302中定义
	const MyButton = React.forwardRef((props, ref) => (
	  <p ref={ref}>
		{props.children}
		i am child01302
	  </p>
	));
	
    return (
      <div>
		<h1>ref---createRef</h1>
        <div>name: <input type="text" ref={this.textInput} /></div>
		<Child01301 ref={this.child} />
		<MyButton ref={this.child02} />
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
	  
	  //拿到子组件Child0131里面的p节点
	  console.log(this.child.current.p.current.innerHTML);
	  
	  //拿到子组件Child0132里面的p节点
	  console.log(this.child02.current.innerHTML);
  }
  componentWillUnmount(){
	  var that=this;
	  console.log("=========p13 componentWillUnmount=============");
	  //console.log(this);
  }
}
export default p13;
