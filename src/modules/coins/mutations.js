export default {
    //pushes coin
    pushCoin(state, payload) {
        const coinData = payload;
        const newItem = {
            id: coinData.id,
            name: coinData.name,
            price: coinData.price,
        };
        state.coins.push(newItem);
    },
    //clear storage after dismout
    clearStorage(state) {
        state.coins = []
    }
}