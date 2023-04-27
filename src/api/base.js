import axios from 'axios'

const service = axios.create({
  baseURL: 'https://youtube.googleapis.com',
  timeout: 200000,
  headers: {
    'content-type': 'application/json'
  }
})

/**
 * @param url api網址
 * @param data 資料
 * @param needAuth 是否需要送token
 */
export function post (url, data, needAuth) {
  if (needAuth) {
    return service.post(url, data, {
      // headers: {
      //   Authorization: localStorage.getItem('token'),
      // }
      // headers: { authorization: `${JSON.parse(localStorage.getItem('token'))}` }
      //   headers: { locale: nowLang }
      // headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDM5ZTU0MS03OGY0LTRjYjItODhlNi01YWQ2NDliYTc5MGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyODc2LyIsImlhdCI6MTYwMjQ4NTU5NiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMDAwMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTAwMDEyfHx8cGV0ZXIwMDF8fHwzfHx8MHx8fDN8fHxwZXRlcjAwMSIsIm5iZiI6MTYwMjQ4NTU5NiwiZXhwIjoxNjAyNjU4Mzk2LCJhdWQiOiJBbnkifQ.-ElH9LzJqOhhEET8JV-9BeYxx0-HALqFjqzR5GLeGkg" }
    })
  } else {
    // return service.post(url, data)
    // return service.post(url, data);
    // return service.post(url, data, { headers: { locale: store.state.lang } })
    return service.post(url, data)
  }
}

/**
 * @param url api網址
 * @param params 資料
 * @param needAuth 是否需要送token
 */
export function get (url, params, needAuth) {
  // console.log(localStorage.getItem("VueAppLanguage"));
  if (needAuth) {
    return service.get(url, {
      params
      // headers: { locale: nowLang },
      // headers: {
      //   Authorization: localStorage.getItem('token'),
      // }
      // headers: {
      //   authorization: `${JSON.parse(localStorage.getItem('token'))}`
      // }
      //   headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDM5ZTU0MS03OGY0LTRjYjItODhlNi01YWQ2NDliYTc5MGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyODc2LyIsImlhdCI6MTYwMjQ4NTU5NiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMDAwMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTAwMDEyfHx8cGV0ZXIwMDF8fHwzfHx8MHx8fDN8fHxwZXRlcjAwMSIsIm5iZiI6MTYwMjQ4NTU5NiwiZXhwIjoxNjAyNjU4Mzk2LCJhdWQiOiJBbnkifQ.-ElH9LzJqOhhEET8JV-9BeYxx0-HALqFjqzR5GLeGkg" }
    })
  } else {
    return service.get(url, params)
  }
}

/**
 * @param url api網址
 * @param data 資料
 * @param needAuth 是否需要送token
 */
export function put (url, data, needAuth) {
  if (needAuth) {
    return service.put(url, data, {
      // headers: { Authorization: localStorage.getItem('token') }
      // headers: {
      //   Authorization: localStorage.getItem('token')
      // }
      // headers: { authorization: `${JSON.parse(localStorage.getItem('token'))}` }
      //   headers: { locale: nowLang }
      // headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDM5ZTU0MS03OGY0LTRjYjItODhlNi01YWQ2NDliYTc5MGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyODc2LyIsImlhdCI6MTYwMjQ4NTU5NiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMDAwMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTAwMDEyfHx8cGV0ZXIwMDF8fHwzfHx8MHx8fDN8fHxwZXRlcjAwMSIsIm5iZiI6MTYwMjQ4NTU5NiwiZXhwIjoxNjAyNjU4Mzk2LCJhdWQiOiJBbnkifQ.-ElH9LzJqOhhEET8JV-9BeYxx0-HALqFjqzR5GLeGkg" }
    })
  } else {
    // return service.post(url, data)
    return service.put(url, data)
  }
}

export default service
