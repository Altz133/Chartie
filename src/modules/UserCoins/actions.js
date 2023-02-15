import binance from "@/helpers/instance.js";
export default {
    //extracts coinId from payload and pushes forward do mutatuin
    AddToUsersCoinList(context, payload) {
        const coinId = payload.id;
        const coins = context.rootGetters['getStore'];
        const coin = coins.find(c => c.id === coinId);
        context.commit('pushCoinToUserCoin', coin);
    },
    // calls .tikerprice to assign new 
    updateStorage({ commit, getters }) {
        const temp = getters.gerCoinsName
        binance.tickerPrice(temp).then((response) => {
            commit('updateStoraga', response.data);
        }).catch(console.log())

    },
    //action for splicing mutation
    spliceFromStorage(context, payload) {
        context.commit('spliceCoin', payload)
    },
    //action for changing interval mutation
    changeInterval(context, payload) {
        context.commit('updateInterval', payload)
    }


}