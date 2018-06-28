import React from 'react'
import TaskList from './TaskList'
import Header from './Header'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TaskList />
      </div>
    )
  }
}

export default App
