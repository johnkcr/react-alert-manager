import { ACTION_ADD_NEW_ALERT } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export const alertReducer = (state, action) => {
    switch (action.type) {
      case ACTION_ADD_NEW_ALERT:
        return {data: [...state.data, {id: uuidv4(), ...action.payload}]};
      default:
        throw new Error();
    }
}