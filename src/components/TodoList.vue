<template>
    <ul class="todo-list">
      <li class="todo-item" v-for="todo in getTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        <label :class="{done: todo.completed}">{{todo.title}}</label>
        <button @click="handleDeleteTodo(todo.id)"><i class="fa-solid fa-trash"></i></button>
      </li>
    </ul>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  created () {
      this.getTodoApi();
  },
  computed: {
      getTodos(){
          return this.$store.state.todos;
      }
  },
  methods: {
     ...mapActions(['getTodoApi','handleDeleteTodo'])
  },
}
</script>
<style lang="scss">
    ul.todo-list{
        padding-left: 0;
        list-style: none;
        max-height: 490px;
        overflow-y: scroll;
        padding-right: 25px;
        li{ 
            font-size: 18px;
            background-color: white;
            border-radius: 30px;
            margin-bottom: 10px;
            overflow: hidden;
            position: relative;
            padding-inline: 35px;
            height: 45px;
            input{
                margin-right: 10px;
                font-size: 20px;
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                
            }
            label{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 45px;
                display: inline-block;
                max-width: 95%;
                color: #464242;
            }
            button{
                background-color: transparent;
                outline: none;
                border: none;
                font-size: 18px;
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                &:hover{
                    color: red;
                }
            }
            
        }
    }
    .done{
        text-decoration: line-through;
        color: gray !important;
        font-style: italic;
    }
</style>