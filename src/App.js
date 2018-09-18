import React, { Component } from 'react'
import 'normalize.css'
import './App.scss'
import List from './components/list/list'
import ElCounter from './components/el-counter/el-counter';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='wrapper'>
          <ElCounter />
          <List {...this.props} />
        </div>
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
