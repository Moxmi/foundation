import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
/*
import Foo from './foo.vue'
import Bar from './Bar.vue'
*/
const Foo = () => import('./Foo.vue')
const Bar = () => import('./Bar.vue')
const Layout = () => import('./Layout.vue')

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

/*
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
*/

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'homePage',
        component: Bar
      }
    ]
  },{
    path: '*',
    redirect: '/home/index'
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: {
    axios: axios
  },
  el: '#app',
  render: (h) => h(App),
  components: { App }
})

