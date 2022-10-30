

export default {
    pushCoinToUserCoin(state, payload) {
        const coin = payload;
        const newItem = {
            id: coin.id,
            name: coin.name,
            price: coin.price,
        }
        state.items.push(newItem);
    },
    updateStoraga(state, payload) {
        for (let i = 0; i < state.items.length; i++) {
            for (let j = 0; j < state.items.length; j++) {
                if (state.items[i].name === payload[j].symbol) {
                    state.items[i].price = payload[j].price
                }
            }
        }
        return 0;
    },
    spliceCoin(state, payload) {
        const X = payload.name
        const index = state.items.findIndex(coin => coin.name === X);
        state.items.splice(index, 1)
    }
}