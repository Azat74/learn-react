import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function changeCurrent(state = {}, action) {
    if (action.type === 'setCurrent') {
      if (state.current === action.payload) {
        return {
          ...state,
          current: ''
        }
      } else {
        return {
          ...state,
          current: action.payload
        }
      }
    } else return state
  }

const store = createStore(changeCurrent)

store.subscribe(() => {
  console.log(store.getState());
})

window.store = store

currentDispatch = (current) => {
    store.dispatch({type: 'setCurrent', payload: `${current}`})
  }

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
