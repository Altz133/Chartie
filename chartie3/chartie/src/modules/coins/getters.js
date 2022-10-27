export default {
    //zwraca liste wszystkich coinów
    getStore(state) {
        return state.coins;
    },
    //wyszukiwarka coinów w List oF coins
    getCoinsBySymbol: (state) => (symbol) => {
        const coin = symbol.toUpperCase();
        if (symbol === "")
            return state.coins;
        else
            return state.coins.filter(c => c.name === coin);
    },
    //potrzebne do przycisku load, aby storage można było załadować nie więcej niż raz
    getLength(state) {
        if (state.coins.length > 0)
            return false;
        else
            return true;
    }
}