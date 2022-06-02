import axios from 'axios';
import { createStore } from 'vuex';
export default createStore({
    state: {
        todos: []
    },
    mutations: {
        setTodos(state,data){
            state.todos = data;
        },
        addTodo(state,todo){
            state.todos.push(todo);
        },
        deleteTodo(state,currentId){
            let newTodos = state.todos.filter(item => item.id != currentId);
            state.todos = newTodos;
        }
    },
    actions: {
        getTodoApi({commit}){
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                commit("setTodos",response.data);
            });
        },
        handleAddTodo({commit},todo){
            commit("addTodo",todo);
        },
        handleDeleteTodo({commit},id){
            commit("deleteTodo",id);
        }
    }
})
