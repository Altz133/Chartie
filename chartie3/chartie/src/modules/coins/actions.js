export default {
    addToStore(context, payload) {
        context.commit('pushCoin', payload);
    },
}