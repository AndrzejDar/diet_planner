import Axios from 'axios'
// import store from './store'

const axios = Axios.create({
  responseType: 'json',
  baseURL: window.location.origin,
  headers: {
    ...{
      'Content-Type': 'application/json',
    },
  },
})
// axios.interceptors.request.use(
//   function (config) {
//     const token = store.getState().auth.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )
axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
