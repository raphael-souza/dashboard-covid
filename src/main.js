import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard.vue"
import CountryDetails from "./components/CountryDetails.vue"

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/dashboard/:country",
      component: CountryDetails,
      props: true
    },
    {
      path: "/",
      redirect: "/dashboard"
    }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
