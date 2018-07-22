export default function showText(state = { current: 0 }, action) {
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