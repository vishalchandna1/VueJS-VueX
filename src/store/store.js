import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todo_list_data: {
      data: [
        {
          text: "Todo Item 1",
          key: "T-1"
        },
        {
          text: "Todo Item 2",
          key: "T-2"
        },
        {
          text: "Todo Item 3",
          key: "T-3"
        },
        {
          text: "Todo Item 4",
          key: "T-4"
        },
        {
          text: "Todo Item 5",
          key: "T-5"
        }
      ],
      dataToBeAdded: {
        text: "",
        key: ""
      }
    },
    api_list_data: {
      data: null
    }
  },
  getters,
  mutations,
  actions
});
