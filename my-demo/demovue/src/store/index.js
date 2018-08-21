import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// 这种写法不好，缓存溢出存在，用下面的方法 ******************************************************
/* const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    increase(state, price) {
      console.log(state, 2222)
      state.count++
    }
  },
  actions: {
    // product dispath 带过来的数据 然后触发 increase 方法
    actionIncrease({
      commit,
      state
    }, product) {
      console.log(state, product)
      this.state.newData = product
      commit('increase') //commit('increase',price)
    }
  }
})
export default store */

// 建议用这种方法 **********************************************************************
export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },

    // getters => 处理数据 每个页面都需要这种格式的数据的时候 适合
    getters: {
      getCount(state) {
        return state.count
      }
    },
    mutations: {
      increase(state, price) {
        console.log(state, 2222)
        state.count++
      }
    },
    actions: {
      // product dispath 带过来的数据 然后触发 increase 方法
      actionIncrease({
        commit,
        state
      }, product) {
        console.log(state, product)
        commit('increase') //commit('increase',price)
      }
    }
  })
}