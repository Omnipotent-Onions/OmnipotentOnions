import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case CREATE_MESSAGE:
    var newObj = Object.assign({}, state);
    newObj[action.payload.create_at] = action.payload;
    return newObj;
  case FETCH_MESSAGES:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }   
} 