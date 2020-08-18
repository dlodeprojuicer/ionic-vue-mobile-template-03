/* Step by step tutorial on how routing works
 *
 * https://medium.com/@dlodeprojuicer/vue-or-ionic-vue-dynamic-routes-4e1ca667dcd0
 * 
 * */ 

import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

const requireModule = require.context("./views", false, /\.vue$/);
let routes = [];
requireModule.keys().map(file => {
  const moduleName = file.split("/")[1].split(".vue")[0];

  if (moduleName.match(new RegExp(/^[A-Z]/)) === null) {
    throw `Page file name must start with uppercase - ${file}`;
  }

  const viewComponent = requireModule(file).default;
  const url = moduleName.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

  if (viewComponent.name !== url) {
    throw `[${file}] Page file name is not consistant with module name - expected ${url}, found ${viewComponent.name}`;
  }

  routes.push({
    path: `/${url}`,
    name: url,
    component: () => import(`./views/${moduleName}.vue`),
    meta: {
      requiresAuth: viewComponent.requiresAuth,
      title: viewComponent.title,
    }
  });
});

routes.push({
  path: "/",
  name: "home",
  component: () => import(`./views/Home.vue`),
  meta: {
    requiresAuth: false
  }
});

routes.push({
  path: "*",
  name: "404",
  component: () => import(`./views/errorPages/404.vue`),
  meta: {
    requiresAuth: false
  }
});

export default new IonicVueRouter({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});
