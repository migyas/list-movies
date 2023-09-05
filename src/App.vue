<script setup lang="ts">
import {ref} from 'vue'

const movies = ref(null)
const type = ref('day')
const URL = ''

fetch(`https://api.themoviedb.org/3/trending/movie/${type.value}?api_key=${URL}`)
.then(response => response.json())
.then(data => movies.value = data.results)

  
</script>

<template>
  <div class="container">
    <div>
      <header>
        <h1>Os melhores filmes em destaque em um só lugar!</h1>
      </header>
      <select name="type" id="type">
        <option value="day">Dia</option>
        <option value="week">Semana</option>
      </select>
      <div v-if="movies">
        <ul class="mb-0">
          <li v-for="movie in movies" :key="movie.url">{{movie.name}}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;

  ul {
    list-style: none;
  }
}



</style>
