<template>
  <div id="watchingExample">
    <div class="mui-content-padded">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        question: '',
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
      getAnswer: _.debounce(
        function () {
          alert(1111)
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              alert(222);
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              alert(333)
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为判定用户停止输入等待的毫秒数
        500
      )
    }
  }
</script>

<style scoped>

</style>
