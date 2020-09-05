import axios from 'axios';

export const loadData = ({ commit }) => {
  axios.get('data.json').then(response => {
    const data = response.data;

    if (data) {
      const stocks = data.stocks;
      const funds = data.funds;
      const stockPortfolio = data.stockPortfolio;

      const portfolio = {
        stockPortfolio,
        funds
      };

      console.log(portfolio);
      commit('SET_STOCKS', stocks);
      commit('SET_PORTFOLIO', portfolio);
    }
  });
};
