export default {
  addItem(state, payload) {
    state.todo_list_data.data.unshift({ text: state.todo_list_data.dataToBeAdded.text, key: "T-" + state.todo_list_data.data.length });
  },
  removeItem(state, payload) {
    for (let i=0; i < state.todo_list_data.data.length; i++) {
      if (payload.key == state.todo_list_data.data[i].key) {
        state.todo_list_data.data.splice(i, 1);
        break;
      }
    }
  },
};
