import React, { Component } from 'react';

class ChildOne extends Component {
  constructor(props) {
    super(props);
	console.log(this)
    this.state = {
      kk: ""
    };
  }
  handleChange = e => {
    this.props.childCont2(e.target.value);
  };
  componentWillMount(){
	  console.log("=========child042 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========child042 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========child042 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========child042 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========child042 render=============");
    return (
      <div>
        <div>
          <div>我是子组件042</div>
		  <div>我是子组件041传过来的值{this.props.nickname}</div>
		  <input type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
  componentDidMount(){
	  console.log("=========child042 componentDidMount=============");
	  console.log(this)
  }
  componentWillUnmount(){
	  console.log("=========child042 componentWillUnmount=============");
	  console.log(this)
  }
}

export default ChildOne; 