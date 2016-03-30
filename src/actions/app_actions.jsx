import AppApi from 'api/app_api'
import AppDispatcher from 'dispatcher/app_dispatcher'
import { ActionTypes, AppVars } from 'constants/app_constants'


var AppActions = {

  incrementTest(val) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.INCREMENT,
      val: AppApi.doInc(val) 
    });
  },
  initApp() {
    console.log(ActionTypes)
    console.log(AppVars)
    AppDispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initial_val: AppApi.getInitialVal()
    });
  }

}

export default AppActions
