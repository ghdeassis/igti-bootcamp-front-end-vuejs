<template>
  <h2>User {{ $route.params.userId }}</h2>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>