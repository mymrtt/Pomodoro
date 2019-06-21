// Action Types
export const ADD_TASK = 'add/tasks/ADD_TASK';

// Initial State
const initialState = {
  list: [],
};

// Reducer
export default function (state = initialState, action) {
 
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        ...action.info,
      };
    default:
      return state;
  }
};

// Action Creators
export const addTask = info => ({
  type: ADD_TASK,
  info,
});