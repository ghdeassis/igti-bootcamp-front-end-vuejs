<template>
  <button @click="back" class="btn-voltar">Voltar</button>
  <loader v-if="isLoading"/>  
  <div v-if="info">
    <div class="div-row">
      <img :src="image">
      <h1>{{ info.name }}</h1>
    </div>
    <div class="div-row">
      <h4>Experiência: </h4> {{ info.base_experience }}
    </div>
    <div class="div-row">    
      <h4>Peso: </h4> {{ info.weight }}
    </div>
    <div class="div-row">
      <h4>Altura: </h4> {{ info.height }}
    </div>
    <div class="div-images">
      <div v-for="(value, key, index) in info.sprites" :key="index">
        <img v-if="value && typeof value === 'string'" :src="value">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getPokemon, getPokemonImageUrl } from "../service/pokemon-service.js";
import Loader from "./Loader";

export default {  
  components: {
    Loader
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const info = ref(null);
    const isLoading = ref(false);

    onMounted(() => {
      isLoading.value = true;
      getPokemon(route.params.id).then(resp => {
        info.value = resp;
        console.log(resp);
      }).finally(() => {
        isLoading.value = false;
      });
    }); 

    const back = () => router.replace("/");

    const image = computed(() => getPokemonImageUrl(info.value.id));

    return { info, isLoading, image, back };
  }
}
</script>

<style scoped>
  .div-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .btn-voltar {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;    
  }
  .div-images {
    display: flex;
    flex-direction: row;  
    flex-wrap: wrap;
    justify-content: center;
  }
</style>