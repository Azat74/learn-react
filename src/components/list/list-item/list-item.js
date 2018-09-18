import React from 'react';
import './list-item.scss'
import '../../checkbox/checkbox'
import Checkbox from '../../checkbox/checkbox';

export default function ListItem(props) {
  const { id, url, img } = props
  return (
    <div className='list-item'>
      <div className='action-container'>
        <div className='left-side'>
          <Checkbox />
        </div>
        <div className='right-side'>
          <button className='share'></button>
          <button className='delete'></button>
          <button className='download'></button>
        </div>
      </div>
      <div className='img-container'>
        <a href={url}>
          <img src={img}/>
        </a>
      </div>
      <div className='license-container'>
        <label>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <span>Выберите лицензию</span>
        </label>
      </div>

    </div>
  )
}
