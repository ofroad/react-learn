import React, { Component } from 'react';
import ChildTwo from "./child031";


class ChildOne extends Component {
  render() {
    return (
      <div>
        <div>
          <div>我是子组件，我不需要任何组件给我传值</div>
          <ChildTwo />
        </div>
      </div>
    );
  }
}

export default ChildOne; 