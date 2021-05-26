<template>  
  <Counter :initialValue="initialValue"/>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data() {
    return {
      initialValue: 10
    }
  }
}
</script>

<style>

</style>
