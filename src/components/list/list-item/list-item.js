import React, { Component } from 'react';
import './list-item.scss'
import '../../checkbox/checkbox'
import Checkbox from '../../checkbox/checkbox';

export default class ListItem extends Component {
  state = {
    checked: false
  }
  toggleChecked = () => {
    this.props.checkedAction(this.props.id);
    this.setState((state) => {
      return {
        checked: !state.checked
      }
    })
  }
  checked = () => {
    return this.state.checked ? 'js-checked' : ''
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.id)
  }
  render () {
    const { id, url, img } = this.props
    return (
      <div className={'list-item ' + this.checked()}>
        <div className='action-container'>
          <div className='left-side' onClick={this.toggleChecked}>
            <Checkbox/>
          </div>
          <div className='right-side'>
            <button className='share'></button>
            <button className='delete' onClick={this.deleteItem}></button>
            <button className='download'></button>
          </div>
        </div>
        <div className='img-container'>
          <a href={url}>
            <img alt='121' src={img}/>
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
}