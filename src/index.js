import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';
import VueRouter from 'vue-router'
import Vue from 'vue';
//import myImg from './demo.png';
//

// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Layout = import Layout from './Layout.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'homePage',
        component: 
      }
    ]
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
  el: '#app'
})

// Now the app has started!
//
//
//
/*
function component() {
  var element = document.createElement('div');
  var preElement = document.createElement('pre');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // now import by import
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  preElement.innerHTML = [
    'webpack!',
    '5 cube',
    cube(5)
  ].join('\n\n')

  btn.innerHTML = "Click me and check the console";

  btn.onclick = printMe;

  element.appendChild(btn);

  return preElement;
}

document.body.appendChild(component());

function convertImageToCanvas(image) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0);
  ctx.font = '49px serif';
  ctx.strokeText('Hello world', 10, 20);

  return canvas;
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL("image/png");
  return image;
}

var img = document.getElementById('demo');

document.body.appendChild(convertCanvasToImage(convertImageToCanvas(document.getElementById('demo'))));
*/
