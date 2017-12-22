import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {SELECT_DELIVERY_TIMESLOT} from 'constants/actionTypes'

const initialState = {
  delivery_time: "",
  reminder_time: "",
}

export function delivery(state = initialState, action) {
  switch (action.type) {
    case SELECT_DELIVERY_TIMESLOT:
      return Object.assign({}, state, {
        delivery_time: action.text
      })
    default:
      return state
  }
}

export default combineReducers({
  routing: routerReducer
})