import React, { Component } from 'react';
import Tools from './tools';
import Sidebar from './sidebar';
import AlertItem from './alert_item'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleSidebar: false };
  }

  render() {
    return (
      <div className="dash-main">
        <Tools onAddNewAlert={this.showSideBar} />
        <Sidebar isOpen={this.state.visibleSidebar} />
        <AlertItem />
      </div>
    )
  }

  showSideBar() {
    this.setState({visibleSidebar: true});
  }
}

export default App;
