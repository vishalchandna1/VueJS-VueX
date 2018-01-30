<template>
  <div class="api-list-container">
    <div class="todo-list" v-if="api_list_data.data">
      <ul>
        <li v-for="item in api_list_data.data">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.fetchData();
  },
  computed: {
    api_list_data() {
      return this.$store.getters.apiListData;
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchListData');
    }
  }
}
</script>

<style>

li {
  list-style-type: decimal;
  list-style-position: inside;
  justify-content: left;
}

</style>
