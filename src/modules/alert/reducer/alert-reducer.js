import { ACTION_ADD_NEW_ALERT, ACTION_REMOVE_ALERT } from '../constants';

function removeElement(_array, id){
  const array = [..._array];
  const index = array.findIndex(v => v.id === id);
  if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
  }
  return array;
}

export const alertReducer = (state, action) => {
    switch (action.type) {
      case ACTION_ADD_NEW_ALERT:
        return {data: [...state.data, action.payload]};
      case ACTION_REMOVE_ALERT:
        return {data: removeElement(state.data, action.payload.id)}
      default:
        throw new Error();
    }
}