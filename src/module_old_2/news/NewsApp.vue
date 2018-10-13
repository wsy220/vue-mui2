<template>
  <div id="newsApp">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>-->
      <h1 id="title" class="mui-title">消息</h1>
      <!--<a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>-->
    </header>

    <div class="demo">
      <!--<button-->
        <!--v-for="tab in tabs"-->
        <!--v-bind:key="tab.name"-->
        <!--v-bind:class="['tab-button',{active:currentTab.name===tab.name}]"-->
        <!--v-on:click="currentTab=tab"-->
      <!--&gt;-->
        <!--{{tab.name}}-->
      <!--</button>-->
      <!--<keep-alive>&lt;!&ndash;失活的组件将被放入缓存&ndash;&gt;-->
        <!--<component v-bind:is="currentTab.component" class="tab"></component>-->
      <!--</keep-alive>-->

      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button',{active:currentTab.name===tab.name}]"
        v-on:click="currentTab=tab"
      >{{tab}}</button>

      <component
        v-bind:is="currentTabComponent"
        class="tab"
      >
      </component>





      <!--<blog-post v-bind:post="post" class="tab_button"></blog-post>-->
      <!--<base-checkbox v-model="lovingVue"></base-checkbox>-->
      <!--<base-input v-on:focus.native="onFocus"></base-input>-->
    </div>
  </div>

</template>

<script>
  import Vue from "vue"

  // var tabs = [
  //   {
  //     name: 'Home',
  //     component: {
  //       template: '<div>Home component</div>'
  //     }
  //   },
  //   {
  //     name: 'Posts',
  //     component: {
  //       template: '<div>Posts component</div>'
  //     }
  //   },
  //   {
  //     name: 'Archive',
  //     component: {
  //       template: '<div>Archive component</div>',
  //     }
  //   }
  // ]






  export default {
    data() {
      return {
        //tabs: tabs,
        //currentTab: tabs[0],
        // post: {
        //   id: 1,
        //   title: 'My Journey with Vue'
        // },
        currentTab:"Posts",
        tabs:['Posts','Archive'],
        posts: [
          {
            id: 1,
            title: 'My journey with Vue',
            content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
          },
          {
            id: 2,
            title: 'Blogging with Vue',
            content: '<p>Lorem ipsum dolor amet bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
          },
          {
            id: 3,
            title: 'Why Vue is so fun',
            content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
          }
        ],
        selectedPost: null
      }
    },
    methods: {},
    computed: {
      reallizePost: function () {
        Vue.post = {
          id: 2,
          title: 'My Journey with Vue222'
        }
      },
      currentTabComponent:function () {
        alert('tab_'+this.currentTab.toLocaleLowerCase());
        return 'tab_'+this.currentTab.toLocaleLowerCase()
      }
    }
  }
  Vue.component('blog-post', {
    props: ['post'],
    template: '<h3>{{ post.title }}</h3>'
  });

  Vue.component('base-checkbox', {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    template: `
     <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change',$event.target.checked)"
     `
  });


  Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
      inputListeners: function () {
        var vm = this
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
          // 我们从父级添加所有的监听器
          this.$listeners,
          // 然后我们添加自定义监听器，
          // 或覆写一些监听器的行为
          {
            // 这里确保组件配合 `v-model` 的工作
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    },
    template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
  })


  Vue.component('tab-posts', {
    template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
  })

  Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
  })
</script>

<style>
  .tab-button {
    margin-top: 100px;
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #E0E0E0;
  }

  .tab-button:active {
    background: #E0E0E0;
  }

  .tab {
    border: 1px solid #CCCCCC;
    padding: 10px;

  }

  .tab-button {
    margin-top: 150px;
  }



  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
  .posts-tab {
    display: flex;
  }
  .posts-sidebar {
    max-width: 40vw;
    margin: 0;
    padding: 0 10px 0 0;
    list-style-type: none;
    border-right: 1px solid #ccc;
  }
  .posts-sidebar li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .posts-sidebar li:hover {
    background: #eee;
  }
  .posts-sidebar li.selected {
    background: lightblue;
  }
  .selected-post-container {
    padding-left: 10px;
  }
  .selected-post > :first-child {
    margin-top: 0;
    padding-top: 0;
  }

</style>
