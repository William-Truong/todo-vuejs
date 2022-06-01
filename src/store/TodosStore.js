import axios from 'axios';
import { createStore } from 'vuex';
export default createStore({
    state: {
        todos: []
    },
    mutations: {
        setTodos(state,data){
            state.todos = data;
        }
    },
    actions: {
        getTodoApi({commit}){
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                commit("setTodos",response.data);
            });
        },
        deleteTodo(){
            
        }
    }
})
