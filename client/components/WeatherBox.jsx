import React from 'react'
import {getWeatherApi} from '../apiClient'

class WeatherBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: {}
    }
  }

  componentDidMount () {
    getWeatherApi()
      .then(weather => {
        this.setState({
          weather
        })
      })
  }

  render () {
    const weather = this.state.weather
    return (
      <div className="widgetBox">
        <div className="overlay">
          <h2>Weather</h2>
          <div className="weatherBox">
            <div className="weatherState">
              Current State: {weather.weatherStateName}
            </div>
            <div className="maxTemp">
              Max Temperature: {weather.maxTemp}
            </div>
            <div className="theTemp">
              Current Temperature: {weather.theTemp}
            </div>
            <div className="humidity">
              Humidity Level: {weather.humidity}%
            </div>
            <div className="minTemp">
              Minimum Temperature: {weather.minTemp}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherBox
