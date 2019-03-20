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
    LIST_DB,
    currentPage: 1,
    currentPageItems: []
  }
  itemsPerPage = 6
  
  checkedAction = id => {
    this.setState(state => {
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
  deleteItem = id => {
    this.setState(state => {
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
  setPrevPage = () => {
    this.setState(state => {
      if (state.currentPage > 1) {
        return {
          currentPage: state.currentPage - 1
        }
      } else {
        return {
          currentPage: state.currentPage
        }
      }
    })
  }
  setNextPage = () => {
    this.setState(state => {
      if (state.currentPage < state.LIST_DB.length / this.itemsPerPage) {
        return {
          currentPage: state.currentPage + 1
        }
      } else {
        return {
          currentPage: state.currentPage
        }
      }
    })
  }
  setCurrentPage = page => {
    this.setState(() => {
      return {
        currentPage: page
      }
    })
  }
  updateCurrentItems = () => {
    this.setState(state => {
      return {
        currentPageItems: state.LIST_DB.slice(
          (state.currentPage - 1) * this.itemsPerPage,
          ((state.currentPage - 1) * this.itemsPerPage) + this.itemsPerPage
        )
      }
    })
  }
  componentDidMount () {
    this.updateCurrentItems()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.LIST_DB.length !== prevState.LIST_DB.length || this.state.currentPage !== prevState.currentPage) {
      this.updateCurrentItems()
    }

    this.setState(state => {
      if (state.currentPage > 1 && state.currentPageItems.length === 0) {
        return {
          currentPage: state.currentPage - 1
        }
      }
    })
  }
  render() {
    const currentPageItems = this.state.currentPageItems
    return (
      <div className="app">
        <div className='wrapper'>
          <ElCounter count={this.state.LIST_DB.length}/>
          <List {...this.props}
            LIST_DB={currentPageItems}
            checkedAction={this.checkedAction}
            deleteItem={this.deleteItem}
          />
          <Pagination
            currentPage={this.state.currentPage}
            setPrevPage={this.setPrevPage}
            setNextPage={this.setNextPage}
            setCurrentPage={this.setCurrentPage}
            LIST_DB={this.state.LIST_DB.length}
            itemsPerPage={this.itemsPerPage}
          />
        </div>
        <ControlBar
          deleteItem={this.deleteItem}
          checkItems={this.state.checkItems}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    current: state.showText.current
  }),
  dispatch => ({
    currentDispatch: current => {
      dispatch({ type: 'setCurrent', payload: `${current}` })
    }
  })
)(App)
