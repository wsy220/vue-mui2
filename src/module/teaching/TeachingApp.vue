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
        <ul>
          <li v-for="(item, index) in items">
            {{parentMessage}}-{{index}}--{{item.message}}
          </li>
        </ul>
        <ul>
          <li v-for="value in object">
            {{value}}
          </li>
        </ul>
        <button v-on:click="changeItems">修改item</button>
        <!--<ol>-->
        <!--&lt;!&ndash; 创建一个 todo-item 组件的实例 &ndash;&gt;-->
        <!--<todo-item></todo-item>-->
        <!--</ol>-->

        <div v-bind:class="{active : isActive,'text-danger':hasError}">555</div>
        <div v-bind:style="{color:activeColor,fontSize:fontSize+'px'}">666</div>
        <h1 v-if="ok">1111</h1>
        <h1 v-else>222</h1>

        <template v-if="ok">
          <h1>222</h1>
          <p>paragragh1</p>
          <p>paragragh2</p>
        </template>
        <template v-else>
          <h1>333</h1>
          <p>paragragh1</p>
          <p>paragragh2</p>
        </template>

        <div v-if="Math.random()>0.5">
          Now you see me
        </div>
        <div v-else>
          Now you don't
        </div>


        <p>
          Ask a yes/no question:
          <input v-model="question">
        </p>
        <p>{{ answer }}{{fullName}}</p>


        <div>
          <button v-on:click="counter+=1">Add 1</button>
          <p>The button above has been clicked {{counter}} times</p>

          <button v-on:click="greet">Greet</button>
        </div>
        <div>
          <input v-model="message2" placeholder="edit me">
          <p>Message is :{{message2}}</p>
        </div>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line">{{message}}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>

        <div>
          <!--多选按钮-->
          <input type="checkbox" id="jack" v-model="checkedNames" value="jack">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" v-model="checkedNames" value="john">
          <label for="john">John</label>
          <input type="checkbox" id="mike" v-model="checkedNames" value="Mike">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names:{{checkedNames}}</span>
        </div>

        <div>
          <!--单选按钮-->
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked:{{picked}}</span>
        </div>

        <!--<div>-->
          <!--&lt;!&ndash;选择框&ndash;&gt;-->
          <!--<select v-model="selecked" multiple style="width: 50px;">-->
            <!--<option disabled value="">请选择</option>-->
            <!--<option>A</option>-->
            <!--<option>B</option>-->
            <!--<option>C</option>-->
          <!--</select>-->
          <!--<span>select {{selecked}}</span>-->
        <!--</div>-->


        <div>
          <select v-model="selecked444">
            <option v-for="option in options" v-bind:value="option.value">
              {{option.text}}
            </option>
          </select>
          <span>Selected:{{selecked444}}</span>
        </div>

        <div>
          <button-counter></button-counter>
        </div>

        <div :style="{fontSize:postFontSize+'em'}">
          <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="postFontSize += 0.1"
          >
          </blog-post>
        </div>
        <input v-model="searchText">
        <customer-input v-model="searchText"></customer-input>

      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import qs from 'qs';

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
        answer: 'I cannot give you an answer until you ask a question!',
        firstName: 'Foo',
        lastName: 'Bar',
        isActive: true,
        hasError: false,
        // styleObject:{
        activeColor: 'red',
        fontSize: 30,
        // }
        parentMessage: 'parent',
        items: [
          {message: 'FOO'},
          {message: 'bor'}
        ],

        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        counter: 0,
        checkedNames: [],
        picked: '',
        selecked: '',
        options: [
          {text: "one", value: "A"},
          {text: "two", value: "B"},
          {text: "three", value: "C"}
        ],
        selecked444: 'A',
        posts: [],
        postFontSize:1
      }
    },
    created: function () {
      // Alias the component instance as `vm`, so that we
      // can access it inside the promise function
      var vm = this
      // Fetch our array of posts from an API
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          vm.posts = data
        })
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
      changeItems: function () {
        this.items = this.items.filter(function (e) {
          return e.message.match('FOO')
        })
      },
      getAnswer:
        function () {

          // if (this.question.indexOf('?') === -1) {
          //   this.answer = 'Questions usually contain a question mark. ;-)'
          //   return
          // }
          this.answer = 'Thinking...'
          var vm = this
          vm.fullName = 'John Doe'
          //axios.get('https://yesno.wtf/api')
          //vm.probeType.$http = axios;
          //this.$http.get('api/static/api.json')
          //this.$http.get('https://yesno.wtf/api')
          //alert("1111");
          this.$http.get('http://192.168.0.6:3000/api/patient/getneworder')
            .then(function (response) {
              //alert("1111");
              alert(JSON.stringify(response.data))
              // vm.answer = response.data.answer;
              //alert(vm.answer);
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
      // 这是我们为判定用户停止输入等待的毫秒数
      // 500
      // )

      greet: function (event) {
        alert("Hello" + this.message + "!");
      }
    },
    computed: {
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          var names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }
      }
    }
  }
  /*button-counter组件*/
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  });

  Vue.component("blog-post", {
    props: ['post'],
    template: '<div class="blog-post">\n' +
    '      <h3>{{ post.title }}</h3>\n' +
    '      <button v-on:click="$emit(\'enlarge-text\', 0.1)">\n' +
    '        Enlarge text\n' +
    '      </button>\n' +
    '      <div v-html="post.body"></div>\n' +
    '    </div>'
  });
  Vue.component('customer-input',{
    props:['value'],
    template:`
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
  });
</script>

<style>

</style>
