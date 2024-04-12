const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a55127d74112b3b35f68c241a2b7d043&query=' + longitude + ',' + latitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The wind speed is " + body.current.wind_speed + " mph, and the  humidity is " + body.current.humidity + " percent. There is a " + body.current.precip + " percent chance of rain.")
        }
    })
}

module.exports = forecast