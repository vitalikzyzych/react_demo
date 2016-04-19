import { ActionTypes } from 'constants/app_constants'
import { UPDATE_PATH } from 'redux-simple-router';

const defaultState = {
  counter : 0
};

function setValue(state, counter) {
  return {
    ...state,
    counter
  };
}



export default function profile(state = defaultState, action) {

  switch (action.type) {
    case ActionTypes.INITIALIZE : return setValue(state, 0);
    case ActionTypes.INCREMENT  : return setValue(state, action.counter);
    default                         : return state;
  }

}
