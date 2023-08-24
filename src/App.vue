<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav class="mavbar">
        <RouterLink class="navbar-item" to="/">Homee</RouterLink>
        <RouterLink class="navbar-item" to="/table">Tabla</RouterLink>
      </nav>
  </header>
  <main id="main-app">
    <RouterView />
  </main>
</template>

<style scoped>
  .navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f1f1;
    padding: 10px;
  }

  .navbar-item{
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0 10px;
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    padding: 20px;
  }

  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
