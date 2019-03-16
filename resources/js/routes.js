import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";

Vue.use(VueRouter);


const routes = [
    { path: "/ds", component: Home, name: "Home" },
];

export default new VueRouter({
    mode: "history",
    base: "/minute-mgr/public/",
    routes
});
