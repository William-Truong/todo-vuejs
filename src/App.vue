<template>
  <TodoApp></TodoApp>
</template>

<script>
import TodoApp from './components/TodoApp.vue';

export default {
  name: 'App',
  components: {
    TodoApp
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: pink;
}
</style>
