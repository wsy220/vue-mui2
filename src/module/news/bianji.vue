
<template>
<div id="newsApp">
  <input ref="dateInput" v-model="date" type="date">

</div>
</template>
  <script>
  export default {
    data() {
      return {
        date:null
      }
    },
    mounted:function () {
      var picker = new Pikaday({
        field: this.$refs.dateInput,
        format: 'YYYY-MM-DD'
      })
    }
  }
</script>

<style scoped>

</style>
