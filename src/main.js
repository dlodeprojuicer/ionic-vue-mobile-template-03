import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import { Plugin } from "vue-fragment"

import '@ionic/core/css/ionic.bundle.css'

Vue.use(Ionic)
Vue.use(Plugin)
Vue.use(VeeValidate)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  // Clear localStorage on logout
  if(to.path === "/") {
    localStorage.clear();
  }

  if(to.meta.requiresAuth && !store.getters.loginToken) {
    store.commit("authError", "Login required");
    next({
      name: "login"
    })
  } else {
    // store.commit("activeNavItem", { key: to.name, color: "#b10519"});
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

