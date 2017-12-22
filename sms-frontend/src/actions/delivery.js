import {SELECT_DELIVERY_TIMESLOT} from 'constants/actionTypes';

export const selectDeliveryTimeslot = (text) => dispatch => {
    dispatch({
        type: SELECT_DELIVERY_TIMESLOT, 
        text 
    });
  }