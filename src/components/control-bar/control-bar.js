import React, { Component } from 'react';
import './control-bar.scss';

export default class ControlBar extends Component {
    // state = {}
    checkStatus = () => {
        if (this.props.itemsCount > 0) {
            return 'js-active';
        } else {
            return '';
        }
    }
    render() {
        return (
            <div className={'control-bar ' + this.checkStatus()}>
                <div className='wrapper'>
                    <span>test</span>
                </div>
            </div>
        );
    }
}