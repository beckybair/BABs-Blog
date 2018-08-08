import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              { id: '1', title: 'Hello!!', previewText: 'This is my first Post', thumbnail: 'http://www.businessbigwigs.com/wp-content/uploads/2013/07/shutterstock_141806476.jpg' },
              { id: '2', title: 'Hello Again', previewText: 'This is my second Post', thumbnail: 'http://www.aapt.org.af/fa/wp-content/uploads/2017/06/17.jpg' },
              { id: '3', title: 'Hello No. 3', previewText: 'This is my third Post', thumbnail: 'http://techtrends.tech/wp-content/uploads/2017/02/tech.jpg' }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
