import React, { Component } from 'react';
import ListItem from './list-item/list-item';
import './list.css';
import LIST_DB from '../../fixtures/list-db';

export default class List extends Component {
    constructor () {
        super()
        this.state = {
            current: ''
        }
    }
    setCurrent = (id) => {
        this.setState((state) => {
            if (id === state.current) {
                return {
                    ...state,
                    current: ''
                }
            } else {
                return {
                    ...state,
                    current: id
                }
            }
        })
    }
    render() {
        const db = LIST_DB
        return (
            <div className="list">
                {
                    db.map((item) => {
                        const id = item.title
                        const setCurrent = () => {
                            this.setCurrent(id)
                        }
                        const text = this.state.current === `${id}` ? item.text : null
                        return <ListItem key={`${id}`} id={`${id}`} title={item.title} text={text} setCurrent={setCurrent}/>
                })}
            </div>
        );
    }
}