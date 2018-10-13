import Vue from 'vue';
import Vuex from 'vuex'; // get vuex
import HomePage from './HomePage';
import VueResource from 'vue-resource';// get $http
Vue.use(Vuex);
Vue.use(VueResource);

/* eslint-disable no-new */

new Vue({
  el: '#homePage',
  template: '<HomePage/>',
  components: { HomePage }
  // mounted:function() {
  //   alert(1111);
  //     /**
  //      * use vue-resource
  //      */
  //     Vue.http.get("api.json").then((response) => {
  //       alert(222);
  //       const json = response.data;
  //       alert(json);
  //     }, () => {
  //       alert(3333);
  //     });
  // }
})


