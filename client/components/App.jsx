import React from 'react'
import TaskList from './TaskList'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TaskList />
        <Footer />
      </div>
    )
  }
}

export default App
