export default {
    namespaced: true,
    state() {
        return {
            news:
                []
        };
    },
    
    getters:{
        getNews(state) {
            return state.news;
        },
    },
    actions:{
        addToStore(context, payload) {
            context.commit('pushNews', payload);
        },
        clearStorage(context){
            context.commit('clearStorage');
        }
    },
    mutations: {
        pushNews(state, payload) {
            const NewsData = payload;
            const newItem = {
                id: NewsData.id,
                title: NewsData.title,
                description: NewsData.description,
                url: NewsData.url,
                date: NewsData.date,
                source: NewsData.source,
            };
            state.news.push(newItem);
        },
        clearStorage(state){
            state.news=[]
        }
    }
}
