import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
  })

  //拦截器
  //拦截请求
  instance.interceptors.request.use(config => {
    return config
  },error => {
    // console.log(error);
  })
  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    // console.log(error);
  })

  //发送真正的网络请求，返回的是一个Promise
  return instance(config)
}
