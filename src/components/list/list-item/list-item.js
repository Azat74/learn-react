import React, { Component } from 'react';
import './list-item.css'

export default class ListItem extends Component {

    componentWillMount(props) {
        console.log(props);
    }
    render() {
        return (
            <div className="list-item">
                123
            </div>
        );
    }
}