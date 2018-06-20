import React, { Component } from 'react';
import Emmiter from './bus'

class ChildOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: ""
    };
  }
  handleChange = e => {
     //触发事件
	 Emmiter.emit('changeMessage',e.target.value,Emmiter);
  };
  componentWillMount(){
	  console.log("=========child051 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========child051 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========child051 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========child051 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========child051 render=============");
    return (
      <div>
        <div>
          <div>我是子组件051</div>
		  <div>我是子组件052传过来的值{this.state.nickname}</div>
		  <input type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
  showmsg(msg,emi){
	  console.log(this)
	  console.log(Emmiter===emi);
	  this.setState({
			nickname:msg
	  });
  }
  componentDidMount(){
	  var that=this;
	  console.log("=========child051 componentDidMount=============");
	  console.log(this);
	   //绑定事件，事件处理方法需要绑定组件实例
	  Emmiter.on('changeMessageqq',that.showmsg.bind(that));
  }
  componentWillUnmount(){
	   var that=this;
	  console.log("=========child051 componentWillUnmount=============");
	  console.log(this);
	  //移除事件
	  Emmiter.removeListener('changeMessageqq',that.showmsg);
  }
}

export default ChildOne; 