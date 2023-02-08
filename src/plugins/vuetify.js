import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: "#e0e0e0",
                primary: "#1867c0",

                // google form like
                // background: '#f0ebf8',
                // primary: '#673AB7'
            },
        }
    }
});
