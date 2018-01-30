import axios from 'axios'

export default {
  fetchListData({ commit, dispatch }, payload) {
    new Promise(function(resolve, reject) {
      axios.get('https://jsonplaceholder.typicode.com/posts/').then(function(res) {
        resolve(res);
        commit('setAPIListData', res);
      })
      .catch(function(err) {
        console.log('An error has occured');
        reject(err);
      })
    })
  }
}
