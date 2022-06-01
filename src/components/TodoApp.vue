<template lang="">
  <div class="todo-app">
    <h1>Todo List</h1>
    <form>
      <input type="text" placeholder="Add New Task..." />
      <button><i class="fa-solid fa-circle-plus"></i></button>
    </form>
    <TodoList></TodoList>
  </div>
</template>
<script>
import TodoList from "./TodoList.vue";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    TodoList
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
.todo-app {
  width: 500px;
  padding: 25px;
  max-height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(255, 203, 211, 0.863);
  border-radius: 25px;
  overflow: auto;
  color: #222;
  form {
    position: relative;
    margin-bottom: 20px;
    input {
      display: block;
      width: 88%;
      padding-block: 16px;
      border: none;
      border-bottom: solid 1px gray;
      background-color: transparent;
      font-size: 16px;
      color: #222;
      outline: none;
      padding-left: 5px;
    }
    button{
      background-color: white;
    border: none;
    border-radius: 70%;
    padding: 3px 6px;
    font-size: 30px;
    position: absolute;
    right: 0;
    top: 55%;
    transform: translateY(-50%);
    }
  }
}

</style>
