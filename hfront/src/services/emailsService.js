import Axios from 'axios'

let options
const setAuth = (auth) => {
  options = { headers: { Authorization: auth } }
}
let baseUrl = '/api/emails'

const wrapper = async (func, ...args) => {
  const response = await func(...args, options)
  return response.data
}

const get = () => wrapper(Axios.get, baseUrl)
// const post = (data) => wrapper(Axios.post, baseUrl, data)
// const put = (id, data) => wrapper(Axios.put, `${baseUrl}/${id}`, data)


export default {
  setAuth,
  get
  // post,
  // put
}