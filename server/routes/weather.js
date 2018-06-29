const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/', (req, res) => {
  request
    .get('https://www.metaweather.com/api/location/2348079')
    .then(resp => {
      const weather = {
        humidity: resp.body.consolidated_weather[0].humidity,
        theTemp: resp.body.consolidated_weather[0].the_temp,
        maxTemp: resp.body.consolidated_weather[0].max_temp,
        minTemp: resp.body.consolidated_weather[0].min_temp,
        weatherStateAbbr: resp.body.consolidated_weather[0].weather_state_abbr,
        weatherStateName: resp.body.consolidated_weather[0].weather_state_name
      }
      res.json(weather)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
