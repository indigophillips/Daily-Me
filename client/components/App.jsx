import React from 'react'
import Widget1 from './NewsBox'
import TaskList from './TaskList'
import WeatherBox from './WeatherBox'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TaskList />
        <Widget1 />
        <WeatherBox />
        <Footer />
      </div>
    )
  }
}

export default App
