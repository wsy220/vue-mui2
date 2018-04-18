<template>
  <div id="teachingApp">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>-->
      <h1 id="title" class="mui-title">资讯</h1>
      <!--<a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>-->
    </header>
    <div class="mui-content" style="margin-top: 45px">
      <div class="mui-content-padded">
        <div>fff{{ fullName }}</div>
        <span v-bind:title="message222">
        查看悬停时间{{message222}}
      </span>
        <p>{{ message }}</p>
        <input v-model="message">
        <!--<button v-on:click="reverseMessage">翻转 message</button>-->
        <button v-on:click="getAnswer">翻转 message</button>
        <span v-if="seen">现在你可以看到我</span>
        <ol>
          <li v-for="tobo in todos">
            {{tobo.text}}
          </li>
        </ol>

        <!--<ol>-->
          <!--&lt;!&ndash; 创建一个 todo-item 组件的实例 &ndash;&gt;-->
          <!--<todo-item></todo-item>-->
        <!--</ol>-->



        <p>
          Ask a yes/no question:
          <input v-model="question">
        </p>
        <p>{{ answer }}</p>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
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
        ],
        question: '123',
        answer: 'I cannot give you an answer until you ask a question!'

      }
    },
    watch: {
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      getAnswer:
        function () {

          // if (this.question.indexOf('?') === -1) {
          //   this.answer = 'Questions usually contain a question mark. ;-)'
          //   return
          // }
          this.answer = 'Thinking...'
          var vm = this
          //axios.get('https://yesno.wtf/api')
          vm.probeType.$http = axios;
          axios.get('/api/static/api.json')
            .then(function (response) {
              alert(JSON.stringify(response.data))
              vm.answer = response.data.answer;
              alert(vm.answer);
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为判定用户停止输入等待的毫秒数
        // 500
      // )
    },
    component: {
      'todo-item': {
        template: '<li>这是一个 todo 项</li>'
      }
    }
  }
</script>

<style>

</style>
