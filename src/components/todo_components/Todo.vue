<template>
  <div class="todo-list-container">
    <div class="todo-add-item">
      <input type="text" v-model="todo_list_data.dataToBeAdded.text" />
      <button @click="addItem" :disabled="todo_list_data.dataToBeAdded.text.length < 1"> + </button>
    </div>
    <div class="todo-list">
      <ul>
        <li v-for="item in todo_list_data.data">
          {{ item.text }}
          <button @click="removeItem(item.key)"> - </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    todo_list_data() {
      return this.$store.getters.todoListData;
    }
  },
  methods: {
    addItem() {
      this.$store.commit({ type: 'addItem' });
    },
    removeItem(key) {
      this.$store.commit({ type: 'removeItem', key: key });
    }
  }
}
</script>

<style>

.todo-add-item {
  margin-left: 3%;
}

li {
  list-style-type: decimal;
  list-style-position: inside;
  justify-content: left;
}

button {
  background-color: orange;
  padding: 2px 10px;
  color: white;
}

</style>
