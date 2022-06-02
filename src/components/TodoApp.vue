<template lang="">
  <div class="todo-app">
    <h1>Todo List</h1>
    <form @submbit.prevent="onsubmit">
      <input type="text" placeholder="Add New Task..." v-model="todoInput"/>
      <button><i class="fa-solid fa-circle-plus"></i></button>
    </form>
    <TodoList></TodoList>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import TodoList from "./TodoList.vue";
export default {
  data() {
    return {
      todoInput: ""
    };
  },
  methods: {
    ...mapActions(['handleAddTodo']),
    onsubmit(){
      this.handleAddTodo({id: Math.random(),title: this.todoInput,completed: false});
    }
  },
  components: {
    TodoList,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
.todo-app {
  width: 600px;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(251, 218, 223, 0.73);
  border-radius: 25px;
  overflow: auto;
  color: #222;
  padding-right: 18px;
  h1{
    color: black;
  }
  form {
    position: relative;
    margin-bottom: 20px;
    padding-right: 25px;
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
    button {
      background-color: white;
      border: none;
     border-radius: 50%;
      padding: 3px 10px;
      font-size: 30px;
      position: absolute;
      right: 25px;
      top: 55%;
      transform: translateY(-50%);
    }
  }
}
</style>
