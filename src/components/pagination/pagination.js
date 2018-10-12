import React, { Component } from 'react'
import './pagination.scss'
import './pagination-btn/pagination-btn'
import PaginationBtn from './pagination-btn/pagination-btn';

export default class Pagination extends Component {
  state = {
    arr: [],
    show: false
  }
  componentWillMount() {
    this.componentWillReceiveProps(this.props)
  }
  componentWillReceiveProps(props) {
    const { LIST_DB, itemsPerPage } = props
    const length = LIST_DB / itemsPerPage
    this.setState(() => {
      return {
        arr: []
      }
    })
    if (length > 1) {
      this.setState(() => {
        return {
          show: true
        }
      })
      for (let i = 0; i < length; i++) {
        this.setState(state => {
          return {
            arr: [...state.arr, i + 1]
          }
        })
      }
    } else {
      this.setState(() => {
        return {
          show: false
        }
      })
    }
  }
  render() {
    const buttonPrev = this.props.currentPage !== 1 ? <button className='pagination-btn pagination-btn_prev' onClick={this.props.setPrevPage}>{'<'}</button> : null
    const buttonNext = this.props.LIST_DB / this.props.itemsPerPage > this.props.currentPage ? <button className='pagination-btn pagination-btn_next' onClick={this.props.setNextPage}>{'>'}</button> : null
    if (this.state.show) {
      return (
        <div className="pagination">
          <div className='pagination__wrapper'>
            {buttonPrev}
            <div className='pages'>
              {
                this.state.arr.map((item, i, arr) => {
                  if
                  (
                    (Math.abs(this.props.currentPage - item) < 3) ||
                    (this.props.currentPage < 3 && item < 6) ||
                    (this.props.currentPage > this.state.arr.length - 2 && item > arr.length - 5)
                  ) {
                    return <PaginationBtn
                      currentPage={item === this.props.currentPage}
                      num={item}
                      setCurrentPage={this.props.setCurrentPage}
                      key={item}
                    />
                  }
                })
              }
            </div>
            {buttonNext}
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}