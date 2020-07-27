import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getReadFile() {
  return Cookies.get('readFile')
}
export function setReadFile(key) {
  return Cookies.set('readFile', key)
}
export function removeReadFile() {
  return Cookies.remove('readFile')
}
