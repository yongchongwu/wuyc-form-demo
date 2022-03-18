import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui';
import App from './App.vue'
import HelloWorld from 'wuyc-form-modeler'

Vue.use(ElementUI);
Vue.use(formCreate);
Vue.component('HelloWorld', HelloWorld);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
