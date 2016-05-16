import { AppTypes, BASE_URL } from 'constants/app_constants'
import { actions as notifActions } from 're-notif'
import Promise from 'bluebird';

// export function login(payload, redirectTo) {
//   return (dispatch) => {
//     Promise.resolve($.ajax({
//       url         : BASE_URL + '/login',
//       method      : 'post',
//       type        : 'json',
//       crossOrigin : true,
//       contentType : 'application/json',
//       data : JSON.stringify(payload)
//     })).then(data => {
//       dispatch(signIn());
//       dispatch(pushPath(redirectTo));
//       return null;
//     }).catch(error => {
//       if (error.status === 401) {
//         dispatch(notifActions.notifSend({
//           kind: 'danger',
//           message: 'Invalid Credentials',
//           dismissAfter: 2000
//         }));
//       }
//     });
//   }
// }


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
