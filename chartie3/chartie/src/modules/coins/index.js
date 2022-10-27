import { createStore } from 'vuex';
import storeMutations from './mutations.js'
import storeActions from './actions.js'
import storeGetters from './getters.js'
import createPersistedState from 'vuex-persistedstate';

import UserCoins from '../UserCoins/index.js'

const store = createStore({
    plugins: [
        createPersistedState({
            paths: ['UserCoins'],
        }),
    ],
    modules: {
        UserCoins: UserCoins,
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