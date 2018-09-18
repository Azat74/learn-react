import React, { Component } from 'react'
import './checkbox.scss'

export default class Checkbox extends Component {
    state = {
        checked: false
    }
    a = 5
    checked = () => {
        this.setState((state) => {
            return {
                checked: !state.checked
            }
        })
    }
    render() {
        const checkStatus = this.state.checked ? ' js-checked': ''
        return (
            <button onClick={this.checked} className={'checkbox' + checkStatus}></button>
        );
    }
}