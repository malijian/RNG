import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './modules/permission'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    settings,
    permission,
    user
  },
  getters
})

// export default store
