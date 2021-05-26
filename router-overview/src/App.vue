<template>
  <h1>Router Overview</h1>

  <div class="div-router">
    <button @click="goToPage('/pageA')">Go to Page A</button>
    <button @click="goToPage('/pageB')">Go to Page B</button>
    <button @click="goToPage('/pageC')">Go to Page C</button>
  </div>

    <div class="div-router">
    <button @click="replacePage('/pageA')">Replace Page A</button>
    <button @click="replacePage('/pageB')">Replace Page B</button>
    <button @click="replacePage('/pageC')">Replace Page C</button>
  </div>

  <div class="div-router">  
    <button @click="goToUser">Go to User</button>
  </div>

  <div class="div-router">
    <router-link to="/pageA">Page A</router-link>
    <router-link to="/pageB">Page B</router-link>
    <router-link to="/pageC">Page C</router-link>
    <router-link :to="{ name: 'user', params: { userId: 1 }}">User</router-link>
  </div>

  <div style="text-align: center; margin-top: 2rem">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    replacePage(route) {
      this.$router.replace(route);
    },
    goToUser() {
      this.$router.push({ name: "user", params: { userId: 2 } });
    }
  }
}
</script>

<style>
  .div-router {
    display: flex;
    justify-content: space-around;
  }
</style>
