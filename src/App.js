import React, { Component } from 'react'
import 'normalize.css'
import './App.scss'
import List from './components/list/list'
import ElCounter from './components/el-counter/el-counter'
import ControlBar from './components/control-bar/control-bar'
import { connect } from 'react-redux'
import LIST_DB from './fixtures/list-db';
import Pagination from './components/pagination/pagination'

class App extends Component {
  state = {
    checkItems: [],
    LIST_DB
  }
  itemsPerPage = 6
  checkedAction = (id) => {
    this.setState((state) => {
      if (state.checkItems.filter(item => item === id).length > 0) {
        return {
          checkItems: state.checkItems.filter(item => item !== id)
        }
      }
      else {
        return {
          checkItems: [...state.checkItems, id]
        }
      }
    })
  }
  deleteItem = (id) => {
    this.setState((state) => {
      return {
        LIST_DB: state.LIST_DB.filter(function (item) {
          if (`${item.item_id}` !== `${id}`) {
            return item
          }
        }),
        checkItems: state.checkItems.filter(function (item) {
          if (`${item}` !== `${id}`) {
            return item
          }
        })
      }
    })
  }
  render() {
    return (
      <div className="app">
        <div className='wrapper'>
          <ElCounter count={this.state.LIST_DB.length}/>
          <List {...this.props} LIST_DB={this.state.LIST_DB} checkedAction={this.checkedAction} deleteItem={this.deleteItem}/>
          <Pagination LIST_DB={this.state.LIST_DB.length} itemsPerPage={this.itemsPerPage}/>
        </div>
        <ControlBar itemsCount={this.state.checkItems.length}/>
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
