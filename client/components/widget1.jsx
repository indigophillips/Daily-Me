import React from 'react'

class Widget1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'hi',
      description: '',
      url: '',
      urlToImage: ''
    }
  }


  render () {
    return (
      <div className="newsBox">
        <div className="title">
          {this.state.title}
        </div>
        <div className="description">
          {this.state.description}
        </div>
        <div className="url">
        </div>
        <div className="title">
        </div>
      </div>
    )
  }
}

export default Widget1
