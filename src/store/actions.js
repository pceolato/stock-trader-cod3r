import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http('data.json')
            .then(res => {
                const data = res.data
                if(data) {
                    commit('setstocks', data.stocks)
                    commit('setPortfolio', {
                        funds: data.funds,
                        stockPortfolio: data.stockPortfolio
                    })
                }
            })
    }
}