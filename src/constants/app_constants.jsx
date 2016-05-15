import keyMirror from 'keymirror'

const ActionTypes = keyMirror({
	  INFO: null,
	  PROFILE: null,
	  INCREMENT: null,
	  INITIALIZE: null,
	});
const AppTypes = keyMirror(
	{ SIGNIN: null,
	  SIGNOUT: null,
	  REGISTRATION: null,
	}
	);

export {
  ActionTypes,
  AppTypes,
}
