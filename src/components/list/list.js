import React, { Component } from 'react';
import ListItem from './list-item/list-item';
import './list.css';
import LIST_DB from '../../fixtures/list-db';

export default class List extends Component {
  setCurrent = (id) => {
    this.props.currentDispatch(`${id}`)
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
            const text = this.props.current === `${id}` ? item.text : null
            return <ListItem key={`${id}`} id={`${id}`} title={item.title} text={text} setCurrent={setCurrent} />
          })}
      </div>
    );
  }
}