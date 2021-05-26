<template>
  <h1>Local Component</h1>
  <h2>{{title}}</h2>
  <!--<button @click="$emit('addclick')">Add</button>-->
  <button @click="add">Add</button>
  <br/>
  <!--<slot></slot>-->
  <slot name="header"/>
  <br/>
  <slot name="content"/>
</template>

<script>
export default {
  //props: ["title"],
  props: {
    title: String,
  },
  methods: {
    add: function () {
      //this.$emit('addclick');
      this.$emit('addclick', 2);
    }
  }
}
</script>

<style scoped>

</style>