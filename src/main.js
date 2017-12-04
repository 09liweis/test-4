import Vue from 'vue';
import FileUploadApp from './components/FileUploadApp.vue';

/* eslint-disable no-new */
Vue.config.productionTip = true;
new Vue({
    el: '#app',
    render: h => h(FileUploadApp)
})