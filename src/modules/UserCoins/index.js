import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
    namespaced: true,
    state() {
        return {
            items:
                []
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions,
}
