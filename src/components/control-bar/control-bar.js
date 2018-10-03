import React, { Component } from 'react';
import './control-bar.scss';

export default class ControlBar extends Component {
    // state = {}
    checkStatus = () => {
        if (this.props.checkItems.length > 0) {
            return 'js-active';
        } else {
            return '';
        }
    }
    deleteItem = () => {
        this.props.checkItems.forEach(item => {
            this.props.deleteItem(item)
        });
    }
    render() {
        return (
            <div className={'control-bar ' + this.checkStatus()}>
                <div className='wrapper'>
                    <span>{this.props.checkItems.length}</span>
                    <button onClick={this.deleteItem}>delete selected</button>
                </div>
            </div>
        );
    }
}