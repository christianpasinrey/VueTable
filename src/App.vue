<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
  <header>
      <nav class="mavbar">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
        <RouterLink class="navbar-item" to="/table">Tabla</RouterLink>
        <RouterLink class="navbar-item" to="/layouts">Plantillas</RouterLink>
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

  .navbar-item:hover{
    text-decoration: none;
    background-color: rgb(72, 72, 72);
    color: rgb(255, 255, 255);
    transition: all 0.5s ease-in-out;
  }
  .router-link-active
  {
    text-decoration: none;
    background-color: rgb(72, 72, 72);
    color: rgb(255, 255, 255);
    transition: all 0.5s ease-in-out;
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
