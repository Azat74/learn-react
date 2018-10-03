import React, { Component } from 'react';
import ListItem from './list-item/list-item';
import './list.scss';

export default class List extends Component {
  render() {
    const db = this.props.LIST_DB
    const {checkedAction, deleteItem} = this.props
    return (
      <div className="list">
        {
          db.map((item) => {
            const id = item.item_id
            const url = item.page_url
            const img = item.sample_url
            return <ListItem checkedAction={checkedAction} key={`${id}`} id={`${id}`} url={url} img={img} deleteItem={deleteItem}/>
          })}
      </div>
    );
  }
}