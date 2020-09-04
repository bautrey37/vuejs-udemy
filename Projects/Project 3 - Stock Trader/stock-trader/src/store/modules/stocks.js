import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    console.log('setting stocks', stocks);
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    console.log(state);
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    console.log(order);
    commit();
  },
  initStocks: ({ commit }) => {
    console.log('init stocks');
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    console.log('getting stocks', state.stocks);
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
