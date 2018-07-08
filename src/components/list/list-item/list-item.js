import React, { Component } from 'react';
import './list-item.scss'

export default class ListItem extends Component {
    state = {
        show: false
    }
    toggle = () => {
        this.setState((state) => {
            return {
                ...state,
                show: !state.show
            }
        });
    }
    render() {
        const {title, text} = this.props
        const showText = this.state.show ? <div className='text'>{text}</div> : null
        return (
            <div className='list-item'>
                <div className='title' onClick={this.toggle}>{title}</div>
                {showText}
            </div>
        );
    }
}