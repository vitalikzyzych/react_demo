import { EventEmitter } from 'events'
import assign from 'object-assign'



/**
 * Reusable store prototype object.  To create a new store, assign this object
 * with store-specific functions, and create with `Object.create()`.
 *
 * Example:
     var UserStore = Object.create(assign({

        getFullName: function() {
            return this.firstName + ' ' + this.lastName
        }

    }, BaseStore))
 */

 var BaseStore = assign(EventEmitter.prototype, {

    emitChange: function() {
      this.emit('change')
    },

    addChangeListener: function(callback) {
      this.on('change', callback)
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback)
    }

})

BaseStore.setMaxListeners(0)

export default BaseStore