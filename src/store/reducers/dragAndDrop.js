import { DRAG_START, DROP } from '../types';

const initialState = {
  dragedCardId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (DRAG_START): {
      return {
        dragedCardId: action.payload
      };
    }

    case (DROP): {
      return {
        dragedCardId: null
      };
    }

    default: return state;
  }
}