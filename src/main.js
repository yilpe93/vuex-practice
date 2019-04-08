import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store/index";
import filter from "@/utils/filters";

Vue.config.productionTip = false;
Vue.filter("currency", filter.currency);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
