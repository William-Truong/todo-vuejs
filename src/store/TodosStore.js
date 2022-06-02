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
        },async deleteTodo(state,deleteId){
            state.todos = state.todos.filter(todo=>todo.id != deleteId)
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${deleteId}`)
            .then(response => console.log(response))
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
            commit("deleteTodo",id)
        }
    }
})
