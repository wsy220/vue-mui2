
<template>
  <div id="teachingApp">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>-->
      <h1 id="title" class="mui-title">资讯</h1>
      <!--<a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>-->
    </header>
    <div class="mui-content" style="margin-top: 45px">
      <div class="mui-content-padded">
      <span v-bind:title="message222">
        查看悬停时间{{message222}}
      </span>
        <p>{{ message }}</p>
        <input v-model="message">
        <button v-on:click="reverseMessage">翻转 message</button>
        <span v-if="seen">现在你可以看到我</span>
        <ol>
          <li v-for="tobo in todos">
            {{tobo.text}}
          </li>
        </ol>

        <ol>
          <!-- 创建一个 todo-item 组件的实例 -->
          <todo-item></todo-item>
        </ol>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    data() {
      return {
        message: 'Hello Vue!',
        message222: '页面加载于' + new Date().toLocaleString(),
        seen: true,
        todos: [
          {text: '学习 JavaScript'},
          {text: '学习 Vue'},
          {text: '创建激动人心的代码'}
        ]
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    },
    component:{
      'todo-item':{
          template: '<li>这是一个 todo 项</li>'
      }
    }
  }
</script>

<style>

</style>
