import { AppTypes } from 'constants/app_constants'

export function signIn(){
  return {
    type: AppTypes.SIGNIN,
  }
}
export function signOut(){
  return {
    type: AppTypes.SIGNOUT,
  }
}
export function registration(){
  return {
    type: AppTypes.REGISTRATION,
  }
}
