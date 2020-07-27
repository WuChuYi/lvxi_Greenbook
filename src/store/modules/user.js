import router from '@/router'
import { getToken, setToken, removeToken } from '@/utils/auth'
import axios from '@/utils/axios'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '成员',
    avatar: '',
    roles: [],
    setting: {
      articlePlatform: [],
    },
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      if (token) {
        setToken(token)
      } else {
        removeToken()
      }
      state.token = token
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },

  actions: {
    // 用户名登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        axios.post('login', { tel: username, password: userInfo.password }).then(data => {
          console.log('data', data)
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', '成员')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    async GetUserInfo({ commit }) {
      // 如果需要获取用户信息时用这个
      // return new Promise((resolve, reject) => {
      //   axios.get('userInfo').then(res => {
      //     console.log(res)
      //     res.roles = [res.role]
      //     commit('SET_ROLES', res.roles)
      //     resolve(res)
      //   }, err => {
      //     reject(err)
      //   })
      // })
      return new Promise((resolve) => {
        commit('SET_ROLES', ['member'])
        resolve({ roles: ['member'] })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    LogOut({ commit }, { redirect } = {}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        router.push('/login', { params: { redirect }})
        resolve()
      })
    },
  },
}

export default user
