import React, { Component } from 'react';
import './list-item.css'

export default class ListItem extends Component {

    componentWillMount(props) {
        console.log(props);
    }
    render() {
        const {title, text} = this.props
        return (
            <div className="list-item">
                <div className='title'>{title}</div>
                <div className='text'>{text}</div>
            </div>
        );
    }
}