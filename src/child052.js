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
	 Emmiter.emit('changeMessageqq',e.target.value,Emmiter);
  };
  componentWillMount(){
	  console.log("=========child052 componentWillMount=============");
	  console.log(this)
  }
  UNSAFE_componentWillMount(){
	  console.log("=========child052 UNSAFE_componentWillMount=============");
	  console.log(this)
  }
  componentWillUpdate(){
	  console.log("=========child052 componentWillUpdate=============");
	  console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========child052 componentDidUpdate=============");
	  console.log(this)
  }
  render() {
	console.log("=========child052 render=============");
    return (
      <div>
        <div>
          <div>我是子组件052</div>
		  <div>我是子组件051传过来的值{this.state.nickname}</div>
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
	  console.log("=========child052 componentDidMount=============");
	  console.log(this);
	  //绑定事件，事件处理方法需要绑定组件实例
	  Emmiter.on('changeMessage',that.showmsg.bind(that));
  }
  componentWillUnmount(){
	  var that=this;
	  console.log("=========child052 componentWillUnmount=============");
	  console.log(this);
	  //移除事件
	  Emmiter.removeListener('changeMessage',that.showmsg);
  }
}

export default ChildOne; 