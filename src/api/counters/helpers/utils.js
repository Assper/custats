import { unescape } from 'querystring'

export function getObjectOrReject(handler, str, error, ...args) {
  try {
    return handler(str)
  } catch (err) {
    if (!error) throw err
    if (typeof error === 'function') throw error(...args)
    throw error
  }
}

export function getObjectFromBase64(base64) {
  return JSON.parse(Buffer.from(base64, 'base64').toString())
}

export function getObjectFromQuery(encode) {
  return JSON.parse(unescape(encode))
}

export function getObjectFromBase64OrReject(base64, error, ...args) {
  return getObjectOrReject(getObjectFromBase64, base64, error, ...args)
}

export function getObjectFromQueryOrReject(encode, error, ...args) {
  return getObjectOrReject(getObjectFromQuery, encode, error, ...args)
}
