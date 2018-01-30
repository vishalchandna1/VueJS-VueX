<template>
  <div id='app'>
    <Todo> </Todo>
  </div>
</template>

<script>
import Todo from './todo_components/Todo.vue';

export default {
  components: {
    Todo: Todo
  },
  computed: {
  },
  mounted() {
    console.log("Executed once this component is loaded.");
  },
  methods: {
  }
}
</script>
