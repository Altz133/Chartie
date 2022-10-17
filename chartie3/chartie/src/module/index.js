import { createStore } from 'vuex';
import storeMutations from './mutations.js'
import storeActions from './actions.js'
import storeGetters from './getters.js'
const store = createStore({
    state(){
        return{
            coins:[]
        }
    },
    mutations:storeMutations,
    actions:storeActions,
    getters:storeGetters,

});
export default store;