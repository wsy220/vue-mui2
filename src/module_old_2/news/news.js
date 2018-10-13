import Vue from 'vue'
import NewsApp from './NewsApp'
import BaseButton from './BaseButton'
import bianji from './bianji'
import define_self from './define_self.vue'
/*定义各个组件包含这个JS中*/
/* eslint-disable no-new */
new Vue({
  el: '#newsApp',
   //template: '<BaseButton/>',
  // template:'<NewsApp/>',
 // template:'<bianji/>',
  template:'<define_self/>',
  components: {
    // NewsApp,
    //BaseButton,
   // bianji
    define_self
  }
})
