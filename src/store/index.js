import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
      { title: 'Image', icon: 'mdi-image', to: '/image' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],

    dashboard: {
      title: 'Random Cats',
      fetched: false,
      content: null,
    },
  },
  mutations: {
    updateStateCats(state, payload) {
      const arr = [];
      for (let i = 0; i < payload.length; i += 1) {
        arr.push({
          id: payload[i].id,
          img: `https://cataas.com/cat/${payload[i].id}`,
          tags: payload[i].tags.join(', '),
          hearted: false,
        });
      }
      state.dashboard.fetched = true;
      state.dashboard.content = arr;
      console.log(state.dashboard.content);
    },
    heartCat(state, id) {
      const item = state.dashboard.content.find((cat) => cat.id === id);
      item.hearted = !item.hearted;
    },
  },
  actions: {
    fetchCats({ commit }) {
      fetch('https://cataas.com/api/cats?limit=8')
        .then((res) => res.json())
        .then((data) => {
          commit('updateStateCats', data);
        });
    },
  },
  getters: {
    getTitle(state) {
      return state.dashboard.title;
    },
  },
});
