<template>

  <div id="newsApp">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>-->
      <h1 id="title" class="mui-title">消息</h1>
      <!--<a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>-->
    </header>


    <custom-input v-model="price"></custom-input>




  </div>
</template>


<script>
  import Vue from "vue"

  export default {

    data() {
      return {
        data:{price:''}
      }
    }
  }
  Vue.component('custom-input', {
    props: ['value'],
    template: `
    <input
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
    >
  `,
    methods:{
      updateValue:function (value) {
        var formattedValue=value.trim();
        if(formattedValue!==value){
          this.$refs.input.value=formattedValue;
        }
        this.$emit('input',Number(formattedValue));
      }
    }
  })

</script>

<style scoped>

</style>
