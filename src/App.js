import React, { Component } from 'react'
import './App.css'
import List from './components/list/list'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <List {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    current: state.showText.current
  }),
  dispatch => ({
    currentDispatch: (current) => {
      dispatch({ type: 'setCurrent', payload: `${current}` })
    }
  })
)(App)
