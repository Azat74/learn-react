import React, { Component } from 'react'

export default class PaginationBtn extends Component {
    setCurrentPage = () => {
        this.props.setCurrentPage(this.props.num)
    }
    render() {
        return (
            <button className={this.props.currentPage === true ? 'pagination-btn js-current-page' : 'pagination-btn'} onClick={this.setCurrentPage}>{this.props.num}</button>
        )
    }
}