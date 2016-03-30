import AppDispatcher from 'dispatcher/app_dispatcher'
import { ActionTypes } from 'constants/app_constants'
import { EventEmitter } from 'events'
import assign from 'object-assign'
import _ from 'lodash'
import BaseStore from 'stores/base_store'
var CHANGE_EVENT = 'change';

var _authors = []
var _val = 0

var AppStore = Object.create(assign({

	getVal: function() {
		return _val
	}
}, BaseStore))

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_val = action.initial_val
			AppStore.emitChange();
			break;
		case ActionTypes.INCREMENT:
			_val = action.val;
			AppStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = AppStore;