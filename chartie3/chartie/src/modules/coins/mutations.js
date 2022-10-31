export default {
    pushCoin(state, payload) {
        const coinData = payload;
        const newItem = {
            id: coinData.id,
            name: coinData.name,
            price: coinData.price,
        };
        state.coins.push(newItem);
    },
    clearStorage(state) {
        state.coins = []
    }
}