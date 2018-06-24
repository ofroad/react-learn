import React from 'react';
import Childlinks from "./childlink";
import './App.css';

console.log(React)
//react中this的相关用法
class p7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
	this.ww4 = this.ww4.bind(this);
  }
  state={
	  name:"qq"
  }
  ww4(){
	  
  }
  handleClick() {
	  //原型方法
	 //console.log(this);
	 alert(this);
	
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
	
  }
  www(){
	  /*
		原型方法
		默认里面的this不是指向组件实例
		可以将事件绑定写为 onClick={this.www.bind(this)}来解决，
		或者在constructor里面写上  this.www = this.www.bind(this) 来解决，这样实际是将www定义为实例方法(实例和原型中都有)
	  */
	  console.log(this);
  }
  changeChildCont = cont => {
	  //这样写是实例方法,this指向组件实例
    console.log(this);
  }
  ww2=()=>{
	 //这样写是实例方法,this指向组件实例 
  }
  ww3(a,e){
	  /*
	  onClick={(e) => this.ww3("123",e)},这种方式可以让this指向组件实例
	  */
	  console.log(this);
	  console.log(a);
	  console.log(e);
  }
  render() {
    return (
	  <div>
		  <h1>react中this的相关用法</h1>
		  <button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
		  </button>
		  <span onClick={this.www}>525234523452345</span>
		  <p onClick={this.changeChildCont}>525234523452345</p>
		  <p onClick={(e) => this.ww3("123",e)}>525234523452345</p>
		  <Childlinks />
	  </div>
    );
  }
}
export default p7;
