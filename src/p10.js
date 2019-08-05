import React from 'react';
import Childlinks from "./childlink";
import {WarningBanner} from "./child0101";
import './App.css';

console.log(React);

class p10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true,age:110};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => {
      console.log("prevState===",prevState)
      return {showWarning: !prevState.showWarning}
    });
  }

  render() {
    return (
      <div>
		<h1>条件渲染4---Preventing Component from Rendering</h1>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
		<Childlinks />
      </div>
    );
  }
}
export default p10;
