import { AppTypes } from 'constants/app_constants'

const defaultState = {
  isAuth : false
};

function signIn (state) {
  return {
    ...state,
    isAuth: true
  };
}
function signOut (state) {
  return {
    ...state,
    isAuth: false
  };
}

export default function auth (state = defaultState, action){
  switch (action.type) {
    case  AppTypes.SIGNIN : return signIn(state)
    case  AppTypes.SIGNOUT : return signOut(state)
  }
  
  return state
}
