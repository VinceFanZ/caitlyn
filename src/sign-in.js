const path = require('path')
const request = require('request')

const api = require('../config').Api
const cookie = require('../config').Cookie

function signIn () {
  console.log('start:' + (new Date()).toLocaleString())

  request.get(api, {
    headers: {
      Cookie: cookie
    }
  }, (err, res, body) => {
    if (err) {
      console.log(err)
    }
    if (body) {
      const res = JSON.parse(body)
      console.log(res)
    }
  })
}

module.exports = signIn