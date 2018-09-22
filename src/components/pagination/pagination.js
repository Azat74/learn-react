import React, { Component } from 'react'
import './pagination.scss'

export default class Pagination extends Component {
    state = {
        pages: 0,
        arr: []
    }
    componentWillMount() {
        this.componentWillReceiveProps(this.props)
    }
    componentWillReceiveProps (props) {
        const { LIST_DB, itemsPerPage } = props
        const length = LIST_DB / itemsPerPage
        this.setState(() => {
            return {
                arr: []
            }
        })
        for (let i = 0; i < length; i++) {
            this.setState((state) => {
                return {
                    arr: [...state.arr, i + 1]
                }
            })
        }
    }
    render() {
        return (
            <div className="pagination">
                {
                    this.state.arr.map(item => {
                        return <button key={item}>{item}</button>
                    })
                }
            </div>
        );
    }
}