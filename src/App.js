import React, { Component } from 'react'
import './App.css'
import List from './components/list/list'
import { createStore } from 'redux'

const store = createStore(changeCurrent)

store.subscribe(() => {
  console.log(store.getState());
})

function changeCurrent(state = {}, action) {
  if (action.type === 'setCurrent') {
    if (state.current === action.payload) {
      return {
        ...state,
        current: ''
      }
    } else {
      return {
        ...state,
        current: action.payload
      }
    }
  } else return state
}

window.store = store

class App extends Component {
  state = { current: '' }
  componentWillMount() {
    store.subscribe(() => {
      this.setState(() => {
        return {
          ...store.getState(),
        }
      })
    })
  }
  currentDispatch = (current) => {
    store.dispatch({type: 'setCurrent', payload: `${current}`})
  }
  render() {
    return (
      <div className="App">
        <List current={this.state.current} updateStore={this.currentDispatch} />
      </div>
    );
  }
}

export default App;
