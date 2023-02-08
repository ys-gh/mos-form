import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import vuetify from "./plugins/vuetify";
import firebaseConfig from "../firebase.config";

Vue.config.productionTip = false;

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
