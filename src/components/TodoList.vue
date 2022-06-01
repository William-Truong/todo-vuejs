<template>
    <ul class="todo-list">
      <li class="todo-item" v-for="todo in getTodos" :key="todo.id">
        <label>
          <input type="checkbox" />
          <span :class="{done: todo.completed}">{{todo.title}}</span>
        </label>
        <button><i class="fa-solid fa-trash"></i></button>
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
     ...mapActions(['getTodoApi'])
  },
  data () {
    return {
        
    }
  },
  
}
</script>
<style lang="scss">
    ul.todo-list{
        padding-left: 0;
        list-style: none;
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 18px;
            background-color: white;
            padding: 9px;
            border-radius: 30px;
            margin-bottom: 5px;
            label{
                display: flex;
                align-items: center;
                flex: 1;
                input{
                    margin-right: 10px;
                }
                
            }
            button{
                background-color: transparent;
                outline: none;
                border: none;
                font-size: 18px;
            }
        }
    }
    .done{
        text-decoration: line-through;
    }
</style>