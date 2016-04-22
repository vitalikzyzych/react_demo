import AppApi from 'api/app_api'
import { ActionTypes, AppTypes } from 'constants/app_constants'

export function increase(val) {
  return {
    type: ActionTypes.INCREMENT,
    counter: AppApi.doInc(val)
  };
}
