export default {
    namespaced: true,
    state() {
        return {
            news:
                []
        };
    },

    getters: {
        getNews(state) {
            return state.news;
        },
    },
    actions: {
        addToStore(context, payload) {
            context.commit('pushNews', payload);
        },
        clearStorage(context) {
            context.commit('clearStorage');
        }
    },
    mutations: {
        pushNews(state, payload) {
            const NewsData = payload;
            const date = new Date(NewsData.date);
            date.toISOString();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            const newItem = {
                id: NewsData.id,
                title: NewsData.title,
                description: NewsData.description,
                url: NewsData.url,
                date: day + '-' + month + '-' + year,
                source: NewsData.source,
            };
            state.news.push(newItem);
        },
        clearStorage(state) {
            state.news = []
        }
    }
}
