import React from 'react';
import Childlinks from "./childlink";
import {LoginButton,LogoutButton,Greeting,Mailbox} from "./child081";
import './App.css';

console.log(React);

class p8 extends React.Component {
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
	const messages = ['React', 'Re: React', 'Re:Re: React'];
	
    let button;
	console.log(this);
    if (isLoggedIn) {
      button = <LogoutButton onClickaaa={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClickbbb={this.handleLoginClick} />
    }

    return (
      <div>
		<h1>条件渲染1---Element Variables</h1>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
		<h1>条件渲染2---Inline If with Logical && Operator</h1>
		<Mailbox unreadMessages={messages} />
		<Childlinks />
      </div>
    );
  }
}
export default p8;
