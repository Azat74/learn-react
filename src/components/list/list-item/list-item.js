import React, { Component } from 'react';
import './list-item.scss'

export default class ListItem extends Component {
  render() {
    const {title, text, setCurrent} = this.props
    const itemText = text ? <div className='text'>{text}</div> : null
    return (
      <div className='list-item'>
        <div className='title' onClick={setCurrent}>{title}</div>
        {itemText}
      </div>
    );
  }
}