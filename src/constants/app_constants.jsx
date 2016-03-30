import keyMirror from 'keymirror'

const ActionTypes = keyMirror({
	  INFO: null,
	  PROFILE: null,
	  INCREMENT: null,
	  INITIALIZE: null
	});
const AppVars = keyMirror(
	{ CHANGE_EVENT: null
	}
	);

export {
  ActionTypes,
  AppVars
}
