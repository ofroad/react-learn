import React, { Component } from 'react';
import Emmiter from './bus'

class ChildOne extends Component {
  handleChange = e => {
    this.props.childCont(e.target.value);
  };
  hd(e){
	   console.log(e);
	   //触发事件
	   Emmiter.emit('changeMessage', "4123412",Emmiter);
  }
  componentWillMount(){
	  console.log("=========child041 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========child041 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========child041 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========child041 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========child041 render=============");
    return (
      <div>
        <div>
          <div onClick={this.hd}>我是子组件041</div>
		  <div>我是子组件042传过来的值{this.props.nickname}</div>
		  <input type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========child041 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========child041 componentWillUnmount=============");
	  console.log(this)
  }
}

export default ChildOne; 