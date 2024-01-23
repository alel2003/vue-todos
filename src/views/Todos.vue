<template>
<h1>hello vue</h1>
<router-link to="/">home</router-link>
<AddTodo 
@add-todo="addTodo"
/>
<select v-model="filter">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="note-complited">Note completed</option>
</select>
<hr />
<Loader v-if="loading"/>
<TodoList 
v-else-if="filterTodos.length"
:todos="filterTodos"
@remove-todo="removeTodo"
/>
<p v-else>нет todos</p>
</template>


<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodoComponent';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  data: () => ({
    todos: [
      {id: 1, title: 'lol', completed: false},
      {id: 2, title: 'ppz', completed: false},
      {id: 3, title: 'pop', completed: false}
    ],
    loading: true,
    filter: 'all'
  }),
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
       setTimeout(() => {
        this.todos = json
        this.loading = false
       },1000)
      })
  },
  components: {
    TodoList, AddTodo, Loader
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(i => i.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  computed: {
    filterTodos() {
        if (this.filter === 'all') {
            return this.todos
        }
        if (this.filter === 'completed') {
            return this.todos.filter(t => t.completed)
        }
        if (this.filter === 'not-completed') {
            return this.todos.filter(t => !t.completed)
        }
    }
  }
}
</script>
