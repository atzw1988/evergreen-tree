const dTime = '_deadtime'
function set (key, value, time) {
  uni.setStorageSync(key, value)
  const seconds = parseInt(time)
  if (seconds > 0) {
    let timestamp = Date.parse(new Date())
    timestamp = timestamp / 1000 + seconds
    uni.setStorageSync(key + dTime, timestamp + '')
  } else {
    uni.removeStorageSync(key + dTime)   
  }
}

function get (key, def) {
  const deadtime = parseInt(uni.getStorageSync(key + dTime))
  if (deadtime) {
    if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
      if (def) {
        return def
      } else {
        return
      }
    }
  }
  const res = uni.getStorageSync(key) 
  if (res) {
    return res
  } else {
    return def
  }
}

function remove (key) {
  uni.removeStorageSync(key)
  uni.removeStorageSync(key + dTime)
}

function clear () {
  uni.clearStorageSync()
}

module.exports = {
  set: set,
  get: get,
  remove: remove,
  clear: clear
}