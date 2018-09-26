import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

import {
    Autocomplete,
    Button,
    Input,
    InputNumber,
    Option,
    Select,
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Option);
Vue.use(Select);

new Vue({
    render: h => h(App)
}).$mount('#app')
