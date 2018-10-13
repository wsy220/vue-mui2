import Vue from 'vue';
import HomePage from './HomePage';
import vuex from 'vuex';
import vueresorce from 'vue-resource';
/* eslint-disable no-new */
new Vue({
  el: '#homePage',
  template: '<HomePage/>',
  components: { HomePage },
  data:{
    message:'Hello Vue'
  }
})

