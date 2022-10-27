import binance from "@/helpers/instance.js";
export default {

    AddToUsersCoinList(context, payload) {
        const coinId = payload.id;
        const coins = context.rootGetters['getStore'];
        const coin = coins.find(c => c.id === coinId);
        context.commit('pushCoinToUserCoin', coin);
    },
    updateStorage({ commit, getters }) {
        const temp = getters.gerCoinsName
        binance.tickerPrice(temp).then((response) => {
            commit('updateStoraga', response.data);
        }).catch(console.log())

    },
    spliceFromStorage(context, payload) {
        context.commit('spliceCoin', payload)
    }

}