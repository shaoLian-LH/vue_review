import { createStore } from 'vuex';
import { StoreProps, UserIdentity } from './index.d';
export default createStore<StoreProps>({
  state: {
    identity: 'unkown',
    data :[
      {
        id: "1",
        time: "2021年1月1日 19:35:26",
        end: "南风四",
        rank: "1",
        point: "52800",
      },
      {
        id: "2",
        time: "2021年1月2日 19:35:26",
        end: "东风一",
        rank: "4",
        point: "-11000",
      },
      {
        id: "3",
        time: "2021年1月3日 19:35:26",
        end: "南风二",
        rank: "3",
        point: "28800",
      },
      {
        id: "4",
        time: "2021年1月4日 19:35:26",
        end: "东风三",
        rank: "2",
        point: "36400",
      },
      {
        id: "5",
        time: "2021年1月5日 19:35:26",
        end: "东风一",
        rank: "4",
        point: "25000",
      },
    ]
  },
  mutations: {
    // 设置用户身份
    setUserIdentity(state, newIdentity: UserIdentity) {
      state.identity = newIdentity;
    },
    clearStore(state) {
      state.identity = 'unkown';
    }
  },
  actions: {
    // 设置用户身份
    login({commit}, identity: UserIdentity) {
      if (identity !== 'admin' && identity !== 'kaopuyun') {
        identity = 'unkown';
      }
      commit('setUserIdentity', identity); 
    },
    // 退出
    logout({commit}) {
      commit('clearStore');
    }
  },
  getters: {
    isValidate: (state) => {
      return state.identity !== 'unkown';
    },
    isAdmin: (state) => {
      return state.identity === 'admin';
    },
    dataArr: (state) =>{
      return state.data;
    },
    dataById: (state) => (id: string) => {
      const data = state.data;
      const item = data.filter((obj) => {
        if (obj.id && obj.id === id) {
          return obj;
        }
      });
      return item;
    }
  },
  modules: {
  }
})
