import React, { Component } from 'react'
import './App.css'
import List from './components/list/list'

class App extends Component {
  state = { current: '' }
  render() {
    return (
      <div className="App">
        <List current={this.state.current} updateStore={this.currentDispatch} />
      </div>
    );
  }
}

export default App;
