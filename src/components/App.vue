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
    visibility_data() {
      // return this.$store.getters.formVisibilityData;
    }
  },
  mounted() {
    console.log("here we go");
  },
  methods: {
    changeForm(){
    }
  }
}
</script>
