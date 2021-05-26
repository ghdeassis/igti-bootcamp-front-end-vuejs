<template>  
  <global-component></global-component>
  <!--@addclick="count++"-->
  <local-component :title="title" @addclick="count += $event">
    <!--Slot Content-->
    <template v-slot:header>
      Slot Header
    </template>
    <template v-slot:content>
      Slot Content
    </template>
  </local-component>
  <p>Count:{{ count }}</p>
  <button @click="goToPageA">page a</button>
  <router-view />
</template>

<script>
import LocalComponent from "./components/LocalComponent.vue";

export default {
  name: "App",
  data: function () {
    return {
      title: "Component Title",
      count: 0,
    };
  },
  computed: {
    computedTitle() {
      return "Teste " + this.title;
    } 
  },
  components: {
    LocalComponent,
  },
  methods: {
    goToPageA() {      
      this.$router.push("/pageA");
    },
    replacePageA() {
      this.$router.replace("/pageA");      
    }
  },
  //ganchos de inicializacao
  beforeCreate() {
    console.log("beforeCreate", this.title, this.computedTitle);
  },
  created() {
    console.log("created", this.title, this.computedTitle);
  },

  //ganchos de montagem (insercao no dom)
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },

  //ganchos de atualizacao
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },

  //ganchos de destruicao
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
