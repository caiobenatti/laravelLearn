import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import firstPage from "./components/pages/myFirstVuePage";
import newRoutePage from "./components/pages/newRoutePage"; //set the routes here for new pages, then you add to the
const routes = [
    {
        path: "/my-new-vue-route",
        component: firstPage
    },
    {
        path: "/my-route",
        component: newRoutePage
    }
];

export default new Router({
    mode: "history",
    routes
});
