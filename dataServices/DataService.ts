import axios from '@/utils/axios'

const DataService = {
  // complaints: { ...ComplaintsService },
  // products: { ...ProductsService },
  // partners: { ...PartnersService },
  // deliveries: { ...DeliveriesService },
  // orders: { ...OrdersService },
  // flashOffers: { ...FlashOffersService },

  postNewMenu: async () => {
    return await axios.post('/api/menu').then((res) => res.data)
  },

  // getUsers: async () => {
  //   return await axios
  //     .get('/api/users')
  //     .then((res) => {
  //       console.log(res.data)
  //       return res.data
  //     })
  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // getUsersList:
  //   (params = null) =>
  //   async () => {
  //     const fields = ['id', 'name', 'surname']
  //     return await axios
  //       .get(`/api/users${parseObjectToUrlQuery(params, fields)}`)
  //       .then((res) => {
  //         // console.log(res.data)
  //         return res.data
  //       })
  //       .catch((e) => {
  //         notifyError(e)
  //         throw e
  //       })
  //   },
  // getUser: (id) => async () => {
  //   return await axios
  //     .get(`/api/users/${id}`)
  //     .then((res) => {
  //       return res.data.data
  //     })
  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // addUser: async (data) => {
  //   console.log('@sending new user', data)
  //   return await axios
  //     .post('/api/users', data)
  //     .then((res) => {
  //       notifySucces('Nowy użytkownik został dodany')
  //       console.log(res.data)
  //       return res.data
  //     })
  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // editUser: (id) => async (data) => {
  //   console.log('@editing user', data)
  //   return await axios
  //     .put(`/api/users/${id}`, data)
  //     .then((res) => {
  //       notifySucces('Zmiany zostały zapisane')
  //       console.log(res.data)
  //       return res.data
  //     })
  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // getRegions: () => {
  //   return () => {
  //     try {
  //       // console.log(regions)
  //       return { data: { results: regions } }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // },
  // getPlatforms: () => {
  //   return () => {
  //     try {
  //       // console.log(platforms)
  //       return { data: { results: platforms } }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // },
  // getReserveStatuses: () => {
  //   return () => {
  //     try {
  //       // console.log(platforms)
  //       return { data: { results: reserveStatus } }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // },
  // getOffersStats: () => async () => {
  //   return await axios
  //     .get(`/api/offers-stats`)
  //     .then((res) => {
  //       return res.data.data
  //     })
  //     .catch((e) => {
  //       notifyError('missing endpoint for offer statistics')
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // getFileUrl: (endpoint) => async () => {
  //   // console.log(`${endpoint}`)
  //   return await axios
  //     .get(endpoint, {
  //       responseType: 'blob',
  //     })
  //     .then((res) => res.data)

  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })
  // },
  // getFile: (id) => async () => {
  //   return await axios
  //     .get(`${id}`, { responseType: 'blob' })
  //     .then((res) => {
  //       // console.log(res.data)
  //       const url = window.URL.createObjectURL(new Blob([res.data]))
  //       // console.log(url)

  //       // var fileLink = document.createElement('a')
  //       // fileLink.href = url
  //       // fileLink.setAttribute('download', 'file.jpg')
  //       // document.body.appendChild(fileLink)
  //       // fileLink.click()

  //       return url
  //     })
  //     .catch((e) => {
  //       notifyError(e)
  //       throw e
  //     })

  // },
}

export default DataService
