export default {
    addToStore(context, payload) {
        context.commit('pushCoin', payload);
    },
    clearStorage(context)
    {
        context.commit('clearStorage')
    }
}