import { createStore } from 'vuex';
import storeMutations from './mutations.js'
import storeActions from './actions.js'
import storeGetters from './getters.js'
import createPersistedState from 'vuex-persistedstate';

import UserCoins from '../UserCoins/index.js'
import FinanceNews from '../news/index.js'
// main storage, persisted state is configured here
const store = createStore({
    plugins: [
        createPersistedState({
            paths: ['UserCoins', 'FinanceNews'],
        }),
    ],
    modules: {
        UserCoins: UserCoins,
        FinanceNews: FinanceNews,
    },
    state() {
        return {
            coins: []
        }
    },
    mutations: storeMutations,
    actions: storeActions,
    getters: storeGetters,
});
export default store;