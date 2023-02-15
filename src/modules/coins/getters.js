export default {
    //returns whole stoarge
    getStore(state) {
        return state.coins;
    },
    //bad search bar
    getCoinsBySymbol: (state) => (symbol) => {
        const coin = symbol.toUpperCase();
        if (symbol === "")
            return state.coins;
        else
            return state.coins.filter(c => c.name === coin);
    },
    //requred for load button to prevent rendering storage more than once
    getLength(state) {
        if (state.coins.length > 0)
            return false;
        else
            return true;
    }
}