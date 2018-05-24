import Vue from 'vue'
import NewsApp from './NewsApp'
import BaseButton from './BaseButton'
import bianji from './bianji'
/*定义各个组件包含这个JS中*/
/* eslint-disable no-new */
new Vue({
  el: '#newsApp',
   template: '<BaseButton/>',
  // template:'<NewsApp/>',
 // template:'<bianji/>',
  components: {
    // NewsApp,
    BaseButton,
   // bianji
  }
})
