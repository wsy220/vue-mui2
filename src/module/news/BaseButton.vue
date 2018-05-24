<template>

  <div id="newsApp">
    <header class="mui-bar mui-bar-nav">
    <!--<a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>-->
    <h1 id="title" class="mui-title">消息</h1>
    <!--<a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>-->
  </header>
    <div style="margin-top: 100px">
      <blog-post v-bind:post="post" class="tab_button"></blog-post>
    </div>


    <ul v-if="todos.length">
      <li v-for="todo in todos">
        {{todo}}
      </li>
    </ul>
    <p v-else>No todos left!</p>

    <div>
      <div v-bind:class="classObject">test</div>

    </div>
  </div>
</template>


<script>
  import Vue from "vue"

  export default {

    data() {
      return {
        post:{
          id: 1,
          title: 'My Journey with Vue!!!!!',

        },
        loginType:'username',
        todos:[
          1,2,3
        ],
        classObject:{
          active:true,
          'text-danger':false
        }
      }
    }
  }
  Vue.component('blog-post', {
    props: ['post'],
    template: '<h3>{{ post.title }}</h3>'
  });
</script>

<style scoped>
  .tab-button{
    margin-top: 250px;
  }
</style>
