import React, { Component } from 'react';
import ListItem from './list-item/list-item';
import './list.css';
import LIST_DB from '../../fixtures/list-db';

export default class List extends Component {
    constructor () {
        super()
        this.state = {
            db: ['']
        }
    }

    render() {
        const db = LIST_DB
        return (
            <div className="list">
                {
                    db.map((item) => {
                        return <ListItem key={`${Math.random()}`} title={item.title} text={item.text} />
                })}
            </div>
        );
    }
}