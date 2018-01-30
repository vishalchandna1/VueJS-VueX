<template>
  <div id='app'>
    <ListFromAPI></ListFromAPI>
  </div>
</template>

<script>
import ListFromAPI from './list_api/ListFromAPI.vue';

export default {
  components: {
    ListFromAPI: ListFromAPI
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
