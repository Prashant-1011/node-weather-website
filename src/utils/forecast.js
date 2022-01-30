const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9312c85a075a1f714b6da041abea3dc1&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Currently it is ' + body.current.temperature + ' degees out. It feels like ' + body.current.feelslike + ' degees out')
        }
    })
}

module.exports = forecast