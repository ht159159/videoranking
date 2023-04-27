// import service from './base'
import { get } from './base'

// 取得影片排名
export const apiVideoRanking = (country, type, params) => {
  return get(`/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${country}&maxResults=12&videoCategoryId=${type}&key=AIzaSyB69OHc44bLxO7BpKEKAaoyZxoIHMlRqEk`, params)
}

// 會員登入 /api/login
// export const apiLogin = (data, needAuth) => {
//   return post('/api/login', data, needAuth)
// }
