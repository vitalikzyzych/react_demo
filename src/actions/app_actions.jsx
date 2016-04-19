import AppApi from 'api/app_api'
import AppDispatcher from 'dispatcher/app_dispatcher'
import { ActionTypes, AppVars } from 'constants/app_constants'

export function increase(val) {
  return {
    type: ActionTypes.INCREMENT,
    counter: AppApi.doInc(val)
  };
}
