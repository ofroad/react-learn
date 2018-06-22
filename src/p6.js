import React, { Component } from 'react';
//import {Link } from "react-router-dom";
import Childlinks from "./childlink";
import Childa from "./child061";
import {Datacontext} from "./datacontext";
import './App.css';

console.log(React)

class p6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input:""
		};
	}
  //在这bind也可以,就不用在onChange里面bind
  //onAddval = this.onAddval.bind(this);
  onAddval(p) {
    this.setState({
      input: p.target.value
    });
  }
  componentWillMount(){
	  console.log("=========p6 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========p6 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========p6 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p6 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========p6 render=============");
    return (
	  <Datacontext.Provider value={this.state.input}>
		  <div className="App">
		  <p>p6 page====父组件向孙子组件通信</p>
		  <div>使用新context api</div>
		  <input type="text" onChange={this.onAddval.bind(this)} />
		  <Childa></Childa>
		  <br /><br />
		  <Childlinks />
		  </div>
	  </Datacontext.Provider>
    );
  }
  componentDidMount(){
	  console.log("=========p6 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========p6 componentWillUnmount=============");
	  console.log(this)
  }
}
/*
p5.childContextTypes = {
  name: PropTypes.string
};
*/
export default p6;
