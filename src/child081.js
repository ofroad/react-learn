import React from 'react';

//函数式组件
export function LoginButton(props) {
	console.log(props)
  return (
    <button onClick={props.onClickbbb}>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button onClick={props.onClickaaa}>
      Logout
    </button>
  );
}
export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (<h1>Welcome back!</h1>);
  }
  return <h1>Please sign up.</h1>;
}

export function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}