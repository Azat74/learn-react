import React, { Component } from 'react';
import ListItem from './list-item/list-item';
import './list.scss';
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
            const id = item.item_id
            const url = item.page_url
            const img = item.sample_url
            return <ListItem key={`${id}`} id={`${id}`} url={url} img={img}/>
          })}
      </div>
    );
  }
}