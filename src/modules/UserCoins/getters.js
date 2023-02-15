export default {
    getCoins(state) {
        return state.items;
    },
    gerCoinsName(state) {
        const cointab = []
        for (let i = 0; i < state.items.length; i++) {
            cointab.push(state.items[i].name);
        }
        return cointab;
    }
}