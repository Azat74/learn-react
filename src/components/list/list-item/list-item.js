import React from 'react';
import './list-item.scss'

export default function ListItem(props) {
  const { title, text, setCurrent } = props
  const itemText = text ? <div className='text'>{text}</div> : null
  return (
    <div className='list-item'>
      <div className='title' onClick={setCurrent}>{title}</div>
      {itemText}
    </div>
  )
}
