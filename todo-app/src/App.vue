<template>
  <h1>Todo App</h1>
  <div v-if="!editMode">
    <Button @click="newTodo">Novo</Button>
    <todo-list :todos="todos" @deleteTodo="deleteTodo" @editTodo="editTodo" />
  </div>
  <todo-item
    v-if="editMode"
    @cancel="cancel"
    @saveTodo="saveTodo"
    :todo="todo"
  />
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: {
    TodoList,
    TodoItem,
  },
  data() {
    return {
      editMode: false,
      todos: [],
      todo: null,
      nextId: 1,
    };
  },
  methods: {
    newTodo() {
      this.todo = null;
      this.editMode = true;
    },
    cancel() {
      this.editMode = false;
    },
    saveTodo(todo) {      
      if (todo.id) {
        //edicao

        const index = this.todos.findIndex((item) => item.id === todo.id);
        this.todos[index] = todo;
      } else {
        //inclusao
        
        todo = { id: this.nextId, ...todo };
        this.todos.push(todo);

        this.nextId++;
        localStorage.setItem("nextId", this.nextId);
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.editMode = false;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    editTodo(index) {
      this.todo = this.todos[index];
      this.editMode = true;
    },
  },
  created() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    }

    const nextId = localStorage.getItem("nextId");
    if (nextId) {
      this.nextId = parseInt(nextId);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
