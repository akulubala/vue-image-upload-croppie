// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

import VueImageUploadCroppie from './components/VueImageUploadCroppie'

export default VueImageUploadCroppie;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VueImageUploadCroppie', VueImageUploadCroppie);
}