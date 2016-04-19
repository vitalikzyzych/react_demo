import { ActionTypes } from 'constants/app_constants'
import { UPDATE_PATH } from 'redux-simple-router';

const defaultState = {
  email: '',
  firstname: '',
  lastname: '',
  birthdate: null,
  gender: '',
  height: '',
  current_weight: ''
};

function updateProfile(state, payload) {
  return {
    ...state,
    ...payload
  };
}

export default function profile(state = defaultState, action) {

  switch (action.type) {
    case actionTypes.INCREMENT : return updateProfile(state, action.payload);
    default                         : return state;
  }

}
