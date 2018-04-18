import Vue from 'vue'
import TeachingApp from './TeachingApp'
//import demo from './ajax_DEMO'

/* eslint-disable no-new */

var vue=new Vue({
  el: '#teachingApp',
  template: '<TeachingApp/>',
  components: { TeachingApp },

  data:{
    a:'hello world',
    fristName:'Foo',
    lastName:'Bar',
    fullName:'Foo Bar'
  },
  created: function () {//用于在实例被创建时候执行代码
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
    console.log(this.data==={a:1});
    console.log(this.el===document.getElementById("teachingApp"));
    console.log(this.reverseMessage);

  },
  computed:{//计算属性，依赖缓存
    reverseMessage: function () {
      return this.a.split('').reverse().join('');
    }
  },
  watch:{//侦听属性
    firstName:function (val) {
      this.fullName=val+''+this.lastName;
    },
    lastName:function (val) {
      this.fullName=this.firstName+''+val;
    }
  }
})

