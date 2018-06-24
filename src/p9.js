import React from 'react';
import Childlinks from "./childlink";
import {LoginButton,LogoutButton} from "./child081";
import './App.css';

console.log(React);

class p9 extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
	//const messages = ['React', 'Re: React', 'Re:Re: React'];
	

    return (
      <div>
		<h1>条件渲染3---Inline If-Else with Conditional Operator</h1>
        {isLoggedIn ? (
			<LogoutButton onClickaaa={this.handleLogoutClick} />
		  ) : (
			<LoginButton onClickbbb={this.handleLoginClick} />
		)}
		
		<p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
		<Childlinks />
      </div>
    );
  }
}
export default p9;
