export function getObjectFromBase64(base64) {
  return JSON.parse(Buffer.from(base64, 'base64').toString())
}

export function getObjectFromBase64OrReject(base64, error, ...args) {
  try {
    return getObjectFromBase64(base64)
  } catch (err) {
    if (!error) throw err
    if (typeof error === 'function') throw error(...args)
    throw error
  }
}
