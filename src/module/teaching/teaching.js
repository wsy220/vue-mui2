import Vue from 'vue'
import TeachingApp from './TeachingApp'

/* eslint-disable no-new */
// new Vue({
//   el: '#teachingApp',
//   template: '<TeachingApp/>',
//   components: { TeachingApp },
//   data:{
//     message:'页面加载于：'+new Date().toLocaleString()
//   }
// })
var app = new Vue({
  el: '#teachingApp',
  template: '<TeachingApp/>',
  components: { TeachingApp },
  data: {
    message: 'Hello Vue!'
  }
})
var app2 = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
